import { useEffect } from "react";

const BuilderComponent = ({tags = 'No tag', id, buildingBlocks, setBuildingBlocks}) => {
const click = (el) => {setBuildingBlocks(buildingBlocks.filter((block, index) => index !== id));el.target.classList.add('pressed')}
    const innerDivs = () => {
        //This function creates inner divs depending on the number at the end of props.tags
        let divNum = Number(String(tags).match(/\d$/));
        let myJsx = [];
        do {
            myJsx.push(<div key={divNum} className="element">{tags}{(divNum === 1 || divNum === 0) && <button className="delete-btn" onClick={(e) => click(e)}>delete</button>}</div>);
            divNum--;
        } while(0 < divNum);
        return myJsx;
    }

    return (
        <div className="template shadow" draggable='true'>
          {innerDivs()}
        </div>
    );
}

export default BuilderComponent;