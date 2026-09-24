import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MinutesPage } from "./pages/PDFs";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atas" element={<MinutesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
