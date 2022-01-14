const BuilderComponent = ({tags = 'No tag'}) => {
    const innerDivs = () => {
        //This function creates inner divs depending on the number at the end of props.tags
        let divNum = Number(String(tags).match(/\d$/));
        let myJsx = [];
        do {
            myJsx.push(<div key={divNum} className="element">{tags}</div>);
            divNum--;
        } while(0 < divNum);
        return myJsx;
    }
    return (
        <div className="template" draggable='true'>
            {innerDivs()}
        </div>
    );
}

export default BuilderComponent;