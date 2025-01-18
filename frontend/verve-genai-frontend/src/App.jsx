import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import AnalysisPage from "./components/AnalysisPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form-page" element={<FormPage/>}/>
          <Route path="/analysis" element={<AnalysisPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
