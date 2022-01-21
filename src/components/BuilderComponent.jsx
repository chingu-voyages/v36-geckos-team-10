const BuilderComponent = ({tags = 'No tag', id, buildingBlocks, setBuildingBlocks}) => {
const removeBlock = () => {setBuildingBlocks(buildingBlocks.filter((block, index) => index !== id))}
    const innerDivs = () => {
        //This function creates inner divs depending on the number at the end of props.tags
        let divNum = Number(String(tags).match(/\d$/));
        let myJsx = [];
        do {
            myJsx.push(<div key={divNum} className="relative flex-1 bg-white p-12 text-center border-4 border-white border-solid rounded-lg shadow shadow-gray-600 user-select-none element">{tags}{(divNum === 1 || divNum === 0) && <button className="delete-btn text-gray-400 rounded-r-md" onClick={removeBlock}>delete</button>}</div>);
            divNum--;
        } while(0 < divNum);
        return myJsx;
    }
    return (
        <div className="template cursor-move" data-tag={tags} draggable='true'>
          {innerDivs()}
        </div>
    );
}

export default BuilderComponent;