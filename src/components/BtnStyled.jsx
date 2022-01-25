export const BtnStyled = ({ innerText, clickFunc }) => {
        return (
        <button className="" onClick={() => clickFunc()}>
            {innerText}
        </button>
    );
}

export default BtnStyled;