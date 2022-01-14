const BuilderComponent = ({tags = 'No tag'}) => {
    const innerDivs = () => {
        //This function creates inner divs depending on the number at the end of props.tags
        const divNum = Number(String(tags).match(/\d$/));
        let myJsx = [<div key='0' className="element">{tags}</div>];        
        for(let i = 1; i < divNum; i++) {
            myJsx.push(<div key={i} className="element">{tags}</div>);
        }
        return myJsx;
    }
    return (
        <div className="template" draggable='true'>
            {innerDivs()}
        </div>
    );
}

export default BuilderComponent;