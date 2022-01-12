import React from "react";

const BuilderComponent = ({tags = 'No tag', numInRow = '1'}) => {
    return (
        numInRow === '3' ? <div className="template">
        <div className="element">{tags} 3</div> <div className="element">{tags} 3</div><div className="element">{tags} 3</div>
        </div> 
        : numInRow === '2' ? <div className="template">
        <div className="element">{tags} 2</div> <div className="element">{tags} 2</div>
        </div>
        : <div className="template">
        <div className="element">{tags}</div>
        </div>
    );
}

export default BuilderComponent;