export const DropdownItem = ({item, handleAdd}) => {
    return (
        <li className="flex justify-between rounded px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white" onClick={(e) => handleAdd(item, e)}>{item}<span className="clickFix hidden ">component added</span></li>
    );
}

export default DropdownItem;