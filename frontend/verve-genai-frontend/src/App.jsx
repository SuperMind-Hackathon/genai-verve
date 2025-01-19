import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import AnalysisPage from "./components/AnalysisPage";

function App() {
  const [loading, setLoading] = useState(false);
  

  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/form-page" element={<FormPage loading = {loading} setLoading={setLoading} />} />
          <Route path="/analysis" element={<AnalysisPage setLoading={setLoading} />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer footer-center bg-gray-100 text-base-content p-4 rounded-lg">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Verve
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;
