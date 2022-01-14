import { useState } from "react";
import WsBuilder from "./WsBuilder";
import WsSidebar from "./WsSidebar";

const Workspace = (props) => {
    const [buildingBlocks, setBuildingBlocks] = useState(['nav', 'div', 'div2', 'div3', 'footer']);
    const addBlocks = (tag, e) => {
        const temp = [tag];
        setBuildingBlocks(buildingBlocks.concat([temp]));
        // Sidebar message
        e.target.lastChild.classList.remove('hidden');
        setTimeout(() => {
            e.target.lastChild.classList.add('hidden')
        }, 1500)
    }
    return (
        <div className="ws-container">
            <WsBuilder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks}/>
            <WsSidebar handleAdd={addBlocks} />
        </div>
    );
}

export default Workspace;