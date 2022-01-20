import DropdownItem from "./DropdownItem";

function Dropdown({items = [], handleAdd }) {

    return (
        
            <ul className="dropdown-list mt-2 bg-white rounded-md shadow-lg z-30">
                {items.map((item, index) => (
                    <DropdownItem className="" key={index} item={item} handleAdd={handleAdd} />
                ))}
            </ul>
    )
}

export default Dropdown;
