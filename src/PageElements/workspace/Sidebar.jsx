import BtnStyled from "../../components/BtnStyled";
import Dropdown from "../../components/Dropdown";
import DropdownHeader from "../../components/DropdownHeader";

const Sidebar = ({ handleAdd, changeModal }) => {
    //Different types of tags can be added bellow and they will show up in the dropdown menu, if the tag has 2 or 3 at the end, it will create 2 or 3 elements.
    const commonTags = ['div', 'div2', 'div3', 'img', 'img2', 'table'];
    const semanticTags = ['header', 'footer', 'nav', 'article'];

    return (
        <aside className="ws-sidebar">
            <div className="dropdown-wrapper">
                <DropdownHeader title='Common Elements' />
                <Dropdown items={commonTags} handleAdd={ handleAdd } />
            </div>
            <div className="dropdown-wrapper">
                <DropdownHeader title='Semantic Elements' />
                <Dropdown items={ semanticTags } handleAdd={ handleAdd } />
            </div>
            <div>
                <BtnStyled innerText='export' changeModal={changeModal} />
            </div>
        </aside>
    );
}

export default Sidebar;