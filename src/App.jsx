import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import { MinutesPage } from "./pages/PDFs";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atas" element={<MinutesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
