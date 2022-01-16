import { AiFillCloseCircle } from "react-icons/ai";

export const ExportModal= ({ changeModal }) => {
    const handleClose = () => changeModal[1](!changeModal[0]);
    return (
        <div id="modal-background" className={changeModal[0] === false ? 'hidden' : ''}>            
            <section id="export-modal">
            <div className="modal-closer" onClick={handleClose}>
            <AiFillCloseCircle />
            </div>
            <div className="code-field">
            <div className="export-code">
                <h3>HTML</h3>
                <code>fqewfwe</code>
            </div>
            <div className="export-code">
                <h3>CSS</h3>
                <code>fqefwe</code>
            </div>
            </div>
            </section>
        </div>
    );
}

export default ExportModal;