import dragula from "react-dragula";
import { useEffect, useRef } from "react";
import BuilderComponent from "./BuilderComponent";

// component that contains workspace builder area
const WsBuilder = () => {
    const builder = useRef(null)
    useEffect(() => {
        const drake = dragula([builder.current], {mirrorContainer: document.body});
    }, []);
        
    return (
        <main className="ws-builder" ref={builder}>
            <BuilderComponent tags="nav"/>
            <BuilderComponent tags='div' numInRow='1' />
            <BuilderComponent tags='div' numInRow='2' />
            <BuilderComponent tags='div' numInRow='3' />
            <BuilderComponent tags='footer' />
        </main>
    );
}

export default WsBuilder;