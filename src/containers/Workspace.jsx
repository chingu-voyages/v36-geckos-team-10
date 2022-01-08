import WsBuilder from "../components/WsBuilder";
import WsSidebar from "../components/WsSidebar";

const Workspace = (props) => {
    return (
        <div className="ws-container">
            <WsBuilder />
            <WsSidebar />
        </div>
    );
}

export default Workspace;