import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import process from "process";

const atasDir = path.join(process.cwd(), "public", "assets", "atas");
const outputFile = path.join(process.cwd(), "src", "data", "minuteData.js");

async function updateAtas() {
  try {
    if (!fs.existsSync(atasDir)) {
      console.error(`Diretório não encontrado: ${atasDir}`);
      process.exit(1);
    }

    // Tenta carregar os dados antigos para preservar descrições e tags
    let oldData = [];
    if (fs.existsSync(outputFile)) {
      try {
        const moduleUrl = pathToFileURL(outputFile).href;
        const module = await import(moduleUrl);
        if (module.minutesData) {
          oldData = module.minutesData;
        }
      } catch (err) {
        console.warn(
          "Aviso: Não foi possível carregar os dados antigos para fazer merge.",
          err.message,
        );
      }
    }

    const files = fs
      .readdirSync(atasDir)
      .filter((file) => file.endsWith(".pdf"));

    // 1. Extrai as informações de cada arquivo
    let parsedFiles = files.map((file) => {
      const pdfUrl = `assets/atas/${file}`;

      const existingEntry = oldData.find(
        (item) => item.pdfUrl === pdfUrl || item.pdfUrl === `/${pdfUrl}`,
      );

      const nameWithoutExt = path.basename(file, ".pdf");
      const dateMatch = nameWithoutExt.match(/(\d{2}-\d{2}-\d{4})$/);

      if (!dateMatch) {
        console.error(
          `❌ Erro: O arquivo "${file}" não segue o padrão de nomenclatura "Nome da Ata DD-MM-YYYY.pdf". Renomeie o arquivo e tente novamente.`,
        );
        process.exit(1); // Interrompe o processo
      }

      let title = nameWithoutExt;
      let date = "9999-99-99"; // Fallback se não encontrar data (ficará por último)
      let displayDate = "";

      if (dateMatch) {
        const dateStr = dateMatch[1]; // DD-MM-YYYY

        // Remove a data e o hífen extra antes da data, se houver
        let rawTitle = nameWithoutExt.replace(dateStr, "").trim();
        if (rawTitle.endsWith("-")) {
          rawTitle = rawTitle.slice(0, -1).trim();
        }
        
        if (rawTitle.length > 0) {
          rawTitle = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1).toLowerCase();
        }
        
        title = rawTitle;

        const [day, month, year] = dateStr.split("-");
        // Formato YYYY-MM-DD permite ordenação alfabética correta
        date = `${year}-${month}-${day}`;
        displayDate = `${day}/${month}/${year}`;
      }

      if (existingEntry) {
        return {
          ...existingEntry,
          // Mantém as informações atualizadas caso você tenha corrigido o nome do arquivo
          title: title || existingEntry.title,
          date: date !== "9999-99-99" ? date : existingEntry.date,
          displayDate: displayDate || existingEntry.displayDate,
          pdfUrl,
        };
      }

      return {
        id: "",
        title: title,
        date: date,
        displayDate: displayDate,
        description: "",
        pdfUrl: pdfUrl,
        tags: [],
      };
    });

    // 2. Ordena os arquivos pela data (mais antigos primeiro)
    parsedFiles.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });

    // 3. Atribui os IDs baseados na ordem final
    const minutesData = parsedFiles.map((item, index) => {
      return {
        ...item,
        id: String(index + 1),
      };
    });

    const fileContent = `export const minutesData = ${JSON.stringify(minutesData, null, 2)};\n`;

    fs.writeFileSync(outputFile, fileContent);
    console.log(
      `✅ Sucesso! ${files.length} atas processadas, ordenadas por data e salvas em src/data/minuteData.js`,
    );
  } catch (error) {
    console.error("❌ Erro ao gerar dados das atas:", error);
  }
}

updateAtas();
