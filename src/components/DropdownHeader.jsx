import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { dropdownToggle } from "../features/sidebarFunctions";

export const DropdownHeader = ({ title }) => {
    return (
        <div className="dropdown-header" onClick={(e) => dropdownToggle(e.target)}>
            <h3 className="clickFix">{ title }</h3>
            <span className="clickFix"><BsArrowDownSquare /></span>
        </div>
    );
}

export default DropdownHeader;