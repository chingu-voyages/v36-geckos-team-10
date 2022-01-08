import {TempNavbar, TempFooter, TempDiv, TempDiv2, TempDiv3} from "../builder-components";

// component that contains workspace builder area
const WsBuilder = () => {
    return (
        <main className="ws-builder">
            <TempNavbar />
            <TempDiv />
            <TempDiv2 />
            <TempDiv3 />
            <TempFooter />
        </main>
    );
}

export default WsBuilder;