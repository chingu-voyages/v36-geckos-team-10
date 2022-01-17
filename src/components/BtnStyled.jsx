export const BtnStyled = ({ innerText, changeModal }) => {
    const clickAnim = (e) => {
        e.target.classList.add('pressed');
        e.target.addEventListener('mouseup', (e) => {e.target.classList.remove('pressed')})
        e.target.addEventListener('mouseout', (e) => {e.target.classList.remove('pressed')})
    }
    const clickFunc = () => {
        /export/i.test(innerText) && changeModal[1](!changeModal[0]);
    }
    return (
        <button className="" onMouseDown={(e) => clickAnim(e)}  onClick={() => clickFunc()}>
            {/create/i.test(innerText) ? innerText.split('').map((char, ind) => <span className={'color' + ind} key={ind}>{char}</span>) : innerText}
        </button>
    );
}

export default BtnStyled;