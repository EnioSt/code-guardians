import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import { MinutesPage } from "./pages/PDFs";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atas" element={<MinutesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
