import dragAndDrop from "../../features/dragAndDrop";
import { useEffect, useRef } from "react";
import BuilderComponent from "../../components/BuilderComponent";

// component that contains workspace builder area
// builder components are added automatically by clicking the sidebar menu
const Builder = ({ buildingBlocks, setBuildingBlocks }) => {
    let dragParent = useRef(null);
    useEffect(() => {
        //sends DOM element to the function
        dragAndDrop(dragParent, setBuildingBlocks);
    }, []);
    return (
        <main className="ws-builder" ref={dragParent}>
            {buildingBlocks.map((block, ind) => <BuilderComponent 
                                                key={ind} 
                                                tags={block}
                                                id={ind}
                                                buildingBlocks={buildingBlocks}
                                                setBuildingBlocks={setBuildingBlocks}
                                                />)}
        </main>
    );
}

export default Builder;