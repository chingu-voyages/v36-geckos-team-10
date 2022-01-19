import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import Workspace from "./Pages/Workspace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Showcase from "./Pages/ShowCase";
import Nav from "./PageElements/Nav";
import ExportModal from "./PageElements/ExportModal";
import Theme from "./Pages/Theme"
import Banner from './PageElements/Banner';

function App() {
  const [modalState, setModalState] = useState(false);
  const [buildingBlocks, setBuildingBlocks] = useState(['nav', 'div', 'div2', 'div3', 'footer']);
  return (
    <BrowserRouter>
    <Banner/>
      <Nav />
      <ExportModal changeModal={[modalState, setModalState]} buildingBlocks={buildingBlocks} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/features" element={<Features />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/workspace" element={<Workspace changeModal={[modalState, setModalState]} buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
