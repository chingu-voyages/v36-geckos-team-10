import DropdownItem from "./DropdownItem";

function Dropdown({items = [], handleAdd }) {

    return (
            <ul className="dropdown-list">
                {items.map((item, index) => (
                    <DropdownItem className="dropdown-list-item" key={index} item={item} handleAdd={handleAdd} />
                ))}
            </ul>
    )
}

export default Dropdown;
