import {FaTrash} from 'react-icons/fa';
import { builderObject } from '../features/builderObject';

const BuilderComponent = ({tags , id, buildingBlocks, setBuildingBlocks, changeModal}) => {
const removeBlock = () => {
    const newArr = buildingBlocks.filter((block, index) => index !== id);
    setBuildingBlocks(newArr)
    changeModal(newArr)
}
//add custom styling for the inner divs in the builder
const itemClasses = `flex justify-center items-center gap-4 text-xl relative flex-1 bg-white 
                    ${tags === 'nav' ? 'h-24' : tags === 'img2' || tags === 'img' ? 'h-60' : 'h-32'}
                     p-2 text-center rounded-lg shadow user-select-none element`;
const innerDivs = () => {
    //This function creates inner divs depending on the number at the end of props.tags
    let divNum = Number(String(tags).match(/\d$/));
    let myJsx = [];
    do {
        myJsx.push(<div key={Math.random()} className={itemClasses}>{builderObject[tags] || 'notags'}{(divNum === 1 || divNum === 0) && <button className="cursor-pointer absolute right-3 top-3 rounded-r-md" onClick={removeBlock}><FaTrash className="text-blue-500 text-base hover:text-red-500"/></button>}</div>);
        divNum--;
    } while(0 < divNum);
    return myJsx;
    }
return (
    <div key={id} className="template cursor-move" data-tag={tags} draggable='true'>
        {innerDivs()}
    </div>
    );
}

export default BuilderComponent;