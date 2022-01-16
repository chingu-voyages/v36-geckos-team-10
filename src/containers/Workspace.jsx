import WsBuilder from "./WsBuilder";
import WsSidebar from "./WsSidebar";

const Workspace = ({ changeModal, buildingBlocks, setBuildingBlocks }) => {
        const addBlocks = (tag, e) => {
            const temp = [tag];
            setBuildingBlocks(buildingBlocks.concat(temp));
            // Sidebar message
            e.target.lastChild.classList.remove('hidden');
            setTimeout(() => {
                e.target.lastChild.classList.add('hidden')
        }, 1500)
    }
    return (
        <div className="ws-container">
            <WsBuilder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks}/>
            <WsSidebar handleAdd={addBlocks} changeModal={changeModal} />
        </div>
    );
}

export default Workspace;