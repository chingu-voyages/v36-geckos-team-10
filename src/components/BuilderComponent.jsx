import { useEffect } from "react";

const BuilderComponent = ({tags = 'No tag', id, buildingBlocks, setBuildingBlocks}) => {
const click = () => {setBuildingBlocks(buildingBlocks.filter((block, index) => index !== id))}

    return (
        /2$/.test(tags) ? <div className="template" draggable='true'>
                          <div className="element">{tags}<button onClick={click}>delete</button></div>
                          <div className="element">{tags}<button onClick={click}>delete</button></div>
                          </div> :
        /3$/.test(tags) ? <div className="template" draggable='true'>
                          <div className="element">{tags}<button onClick={click}>delete</button></div>
                          <div className="element">{tags}<button onClick={click}>delete</button></div>
                          <div className="element">{tags}<button onClick={click}>delete</button></div>
                          </div> :
        <div className="template" draggable='true'>
        <div className="element">{tags}<button onClick={click} >d</button></div>
        </div>
    );
}

export default BuilderComponent;