import dragAndDrop from "../../features/dragAndDrop";
import { useEffect, useRef } from "react";
import BuilderComponent from "../../components/BuilderComponent";

// component that contains workspace builder area
// builder components are added automatically by clicking the sidebar menu
const Builder = ({ buildingBlocks, setBuildingBlocks, changeModal }) => {
    let dragParent = useRef(null);
    useEffect(() => {
        //sends DOM element to the function
        dragAndDrop(dragParent, changeModal);
    }, [changeModal]);
    return (
        <main className="ws-builder" ref={dragParent}>
            {buildingBlocks.map((block, index) => <BuilderComponent 
                                                key={index} 
                                                tags={block}
                                                id={index}
                                                buildingBlocks={buildingBlocks}
                                                setBuildingBlocks={setBuildingBlocks}
                                                />)}
        </main>
    );
}

export default Builder;