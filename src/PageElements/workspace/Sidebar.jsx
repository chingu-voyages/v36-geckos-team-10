import BtnStyled from "../../components/BtnStyled";
import Dropdown from "../../components/Dropdown";

const Sidebar = ({ handleAdd, toggleModal }) => {
    //Different types of tags can be added bellow and they will show up in the dropdown menu, if the tag has 2 or 3 at the end, it will create 2 or 3 elements.
    const commonTags = ['div', 'div2', 'div3', 'img', 'img2', 'table'];
    const semanticTags = ['header', 'footer', 'nav', 'article'];
    const dropDownStyle = 'p-16';

    return (
        <aside className="ws-sidebar">
                <Dropdown className={dropDownStyle} items={commonTags} handleAdd={ handleAdd } title='Common Tags' />
                <Dropdown className={dropDownStyle} items={ semanticTags } handleAdd={ handleAdd } title='Semantic Elements' />
                <BtnStyled clickFunc={() => {toggleModal[1](!toggleModal[0])}} innerText='export' />
        </aside>
    );
}

export default Sidebar;