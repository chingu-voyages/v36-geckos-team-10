import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import Workspace from "./Pages/Workspace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./PageElements/Navbar";
import ExportModal from "./PageElements/ExportModal";
import TemplatePicker from "./Pages/TemplatePicker"
import Banner from './PageElements/Banner';

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
        <Route path="/template" element={<TemplatePicker />} />
        <Route path="/workspace" element={<Workspace toggleModal={[modalState, setModalState]} changeModal={setModalContent} buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
