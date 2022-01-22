import Builder from "../PageElements/workspace/Builder";
import Sidebar from "../PageElements/workspace/Sidebar";

const Workspace = ({ toggleModal, buildingBlocks, setBuildingBlocks, changeModal }) => {
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
            <Builder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} toggleModal={toggleModal} changeModal={changeModal}  />
            <Sidebar handleAdd={addBlocks} toggleModal={toggleModal} />
        </div>
    );
}

export default Workspace;