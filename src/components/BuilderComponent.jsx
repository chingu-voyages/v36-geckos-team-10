const BuilderComponent = ({tags = 'No tag'}) => {
    return (
        /2$/.test(tags) ? <div className="template" draggable='true'>
                          <div className="element">{tags}</div>
                          <div className="element">{tags}</div>
                          </div> :
        /3$/.test(tags) ? <div className="template" draggable='true'>
                          <div className="element">{tags}</div>
                          <div className="element">{tags}</div>
                          <div className="element">{tags}</div>
                          </div> :
        <div className="template" draggable='true'>
        <div className="element">{tags}</div>
        </div>
    );
}

export default BuilderComponent;