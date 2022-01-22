import {FaTrash} from 'react-icons/fa';

const BuilderComponent = ({tags = 'No tag', id, buildingBlocks, setBuildingBlocks}) => {
const removeBlock = () => {
    setBuildingBlocks(buildingBlocks.filter((block, index) => index !== id))

}
    const innerDivs = () => {
        //This function creates inner divs depending on the number at the end of props.tags
        let divNum = Number(String(tags).match(/\d$/));
        let myJsx = [];
        do {
            myJsx.push(<div key={divNum} className="relative flex-1 bg-white p-12 text-center rounded-lg shadow user-select-none element">{tags}{(divNum === 1 || divNum === 0) && <button className="cursor-pointer absolute right-3 top-3 rounded-r-md" onClick={removeBlock}><FaTrash className="text-blue-500"/></button>}</div>);
            divNum--;
        } while(0 < divNum);
        return myJsx;
    }
    return (
        <div className="template cursor-pointer" data-tag={tags} draggable='true'>
          {innerDivs()}
        </div>
    );
}

export default BuilderComponent;