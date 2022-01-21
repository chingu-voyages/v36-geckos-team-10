import { FaAngleDown } from "react-icons/fa";
import { dropdownToggle } from "../features/sidebarFunctions";

function Dropdown({items = [], handleAdd, title }) {

    return (
        <div className="dropdown-wrapper uppercase">
            <div className="flex items-center justify-between w-full rounded-md shadow px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" onClick={(e) => dropdownToggle(e.target)}>
            <h3 className="pointer-events-none">{ title }</h3>
            <span className="pointer-events-none"><FaAngleDown /></span>
            </div>
            <ul className="mt-4 bg-white rounded-md shadow-lg z-30 dropdown-list transition duration-900 ease-in-out">
                {items.map((item, index) => (
                    <li className="flex justify-between rounded px-3 py-3 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white " key={index} onClick={(e) => handleAdd(item, e)}>{item}<span className="pointer-events-none hidden">component added</span></li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown;
