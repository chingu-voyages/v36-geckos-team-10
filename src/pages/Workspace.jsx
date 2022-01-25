import { useEffect } from "react";
import Builder from "../pageElements/workspace/Builder";
import Sidebar from "../pageElements/workspace/Sidebar";

const Workspace = ({ toggleModal, buildingBlocks, setBuildingBlocks, changeModal }) => {
    const addBlocks = (tag, e) => {
        setBuildingBlocks([...buildingBlocks, tag]);
        changeModal([...buildingBlocks, tag]);
        // Component added message
        e.target.lastChild.classList.remove('hidden');
        setTimeout(() => {
        e.target.lastChild.classList.add('hidden')
        }, 1500)
    }
    useEffect(()=>{
        let bodyEl = document.querySelector('body');
        bodyEl.style.overflowY = 'hidden'
        return (bodyEl.style.overflowY = 'auto')
    }, []);
    return (
        <div className="ws-container flex w-full flex-1">
            <Builder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} toggleModal={toggleModal} changeModal={changeModal}  />
            <Sidebar handleAdd={addBlocks} toggleModal={toggleModal} />
        </div>
    );
}

export default Workspace;