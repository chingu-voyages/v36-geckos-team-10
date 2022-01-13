import { useEffect } from "react";

const BuilderComponent = ({tags = 'No tag', id, buildingBlocks, setBuildingBlocks}) => {
    const click = () => {
        console.log(buildingBlocks)
        const newBlocks = buildingBlocks;
        newBlocks.splice(id, 1)
        const remove = () => (setBuildingBlocks(newBlocks))
        return remove
    }

    return (
        /2$/.test(tags) ? <div className="template" draggable='true'>
                          <div className="element">{tags}<button>test</button></div>
                          <div className="element">{tags}<button>test</button></div>
                          </div> :
        /3$/.test(tags) ? <div className="template" draggable='true'>
                          <div className="element">{tags}<button>test</button></div>
                          <div className="element">{tags}<button>test</button></div>
                          <div className="element">{tags}<button>test</button></div>
                          </div> :
        <div className="template" draggable='true'>
        <div className="element">{tags}<button onClick={click} >test</button></div>
        </div>
    );
}

export default BuilderComponent;