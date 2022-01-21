import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Workspace from "./pages/Workspace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pageElements/Navbar";
import ExportModal from "./pageElements/ExportModal";
import TemplatePicker from "./pages/TemplatePicker"
import Banner from './pageElements/Banner';

function App() {
  const [buildingBlocks, setBuildingBlocks] = useState(['nav', 'div', 'div2', 'div3', 'footer']);
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState([...buildingBlocks]);
  return (
    <BrowserRouter>
    <Banner/>
      <Navbar />
      <ExportModal changeModal={[modalState, setModalState]} modalContent={modalContent} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/theme" element={<TemplatePicker />} />
        <Route path="/workspace" element={<Workspace toggleModal={[modalState, setModalState]} changeModal={setModalContent} buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
