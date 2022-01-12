import React from "react";

const BuilderComponent = ({tags = 'No tag', numInRow}) => {
    return (
        numInRow === '3' ? <div className="template" draggable='true'>
        <div className="element">three {tags}s</div> <div className="element">three {tags}s</div><div className="element">three {tags}s</div>
        </div> 
        : numInRow === '2' ? <div className="template" draggable='true'>
        <div className="element">split {tags}</div> <div className="element">split {tags}</div>
        </div>
        : <div className="template" draggable='true'>
        <div className="element">{tags}</div>
        </div>
    );
}

export default BuilderComponent;