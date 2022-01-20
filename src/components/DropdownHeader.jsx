import { FaAngleDown } from "react-icons/fa";
import { dropdownToggle } from "../features/sidebarFunctions";

export const DropdownHeader = ({ title }) => {
    return (
        <div className=" flex justify-between w-full rounded-md shadow  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
        onClick={(e) => dropdownToggle(e.target)}>
            <h3 className="clickFix">{ title }</h3>
            <span className="clickFix mt-1"><FaAngleDown /></span>
        </div>
    );
}

export default DropdownHeader;