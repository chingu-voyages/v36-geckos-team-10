export const DropdownItem = ({item, handleAdd}) => {
    return (
        <li onClick={(e) => handleAdd(item, e)}>{item}<span className="clickFix hidden">component added</span></li>
    );
}

export default DropdownItem;