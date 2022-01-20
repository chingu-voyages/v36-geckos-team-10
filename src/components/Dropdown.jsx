import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { dropdownToggle } from "../features/sidebarFunctions";

function Dropdown({items = [], handleAdd, title }) {

    return (
        <div className="dropdown-wrapper p-4 shadow uppercase">
            <div className="flex items-center justify-between w-full" onClick={(e) => dropdownToggle(e.target)}>
            <h3 className="pointer-events-none">{ title }</h3>
            <span className="pointer-events-none"><BsArrowDownSquare /></span>
            </div>
            <ul className="mt-4 dropdown-list">
                {items.map((item, index) => (
                    <li key={index} onClick={(e) => handleAdd(item, e)}>{item}<span className="pointer-events-none hidden">component added</span></li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown;
