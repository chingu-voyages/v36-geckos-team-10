import { useState } from "react";
import WsBuilder from "../components/WsBuilder";
import WsSidebar from "../components/WsSidebar";

const Workspace = (props) => {
    const blocks = JSON.parse(localStorage.getItem('blocks'));
    const [buildingBlocks, setBuildingBlocks] = useState(blocks);
    return (
        <div className="ws-container">
            <WsBuilder />
            <WsSidebar />
        </div>
    );
}

export default Workspace;