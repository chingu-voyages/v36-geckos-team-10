import React, { useState } from "react";
import LandingPage from "./containers/LandingPage";
import Workspace from "./containers/Workspace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./containers/About";
import Features from "./containers/Features";
import Showcase from "./containers/ShowCase";
import Nav from "./components/Nav";
import ExportModal from "./containers/ExportModal";

function App() {
  const [modalState, setModalState] = useState(false);
  const [buildingBlocks, setBuildingBlocks] = useState(['nav', 'div', 'div2', 'div3', 'footer']);
  return (
    <BrowserRouter>
      <Nav />
      <ExportModal changeModal={[modalState, setModalState]} buildingBlocks={buildingBlocks} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/features" element={<Features />} />
        <Route path="/workspace" element={<Workspace changeModal={[modalState, setModalState]} buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
