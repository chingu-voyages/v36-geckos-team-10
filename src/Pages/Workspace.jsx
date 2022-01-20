import Builder from "../pageElements/workspace/Builder";
import Sidebar from "../pageElements/workspace/Sidebar";

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
            <Builder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks}/>
            <Sidebar handleAdd={addBlocks} changeModal={changeModal} />
        </div>
    );
}

export default Workspace;