export const BtnStyled = ({ innerText, clickFunc }) => {
    const clickAnim = (e) => {
        e.target.classList.add('pressed');
        e.target.addEventListener('mouseup', (e) => {e.target.classList.remove('pressed')})
        e.target.addEventListener('mouseout', (e) => {e.target.classList.remove('pressed')})
    }
        return (
        <button className="" onMouseDown={(e) => clickAnim(e)}  onClick={() => clickFunc()}>
            {innerText}
        </button>
    );
}

export default BtnStyled;