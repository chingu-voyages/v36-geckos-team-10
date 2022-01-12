import dragAndDrop from "../features/dragDrop";
import { useEffect, useRef } from "react";
import BuilderComponent from "./BuilderComponent";

// component that contains workspace builder area
const WsBuilder = () => {
    let dragParent = useRef(null);
    useEffect(() => {
        dragAndDrop(dragParent);
    }, []);
    return (
        <main className="ws-builder" ref={dragParent}>
            <BuilderComponent tags="nav"/>
            <BuilderComponent tags='div' numInRow='1' />
            <BuilderComponent tags='div' numInRow='2' />
            <BuilderComponent tags='div' numInRow='3' />
            <BuilderComponent tags='footer' />
        </main>
    );
}

export default WsBuilder;