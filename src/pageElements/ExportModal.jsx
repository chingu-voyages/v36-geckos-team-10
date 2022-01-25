import { AiFillCloseCircle } from "react-icons/ai";
import { transformCss, transformHtml } from "../features/exportFunctionality";

export const ExportModal= ({ changeModal, modalContent }) => {
    const handleClose = () => changeModal[1](!changeModal[0]);
    let htmlCode = `
<!DOCTYPE html>
<head>
<link rel="stylesheet" href="FILENAME.css">
<title>Lorem ipsum</title>
</head>
<body>
${transformHtml(modalContent).join("\n")}
</body>`;
let cssCode = `
body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
${transformCss(modalContent).join('\n')}
`;
    return (
        <div id="modal-background" className={changeModal[0] === false ? 'hidden' : ''}>            
            <section id="export-modal">
            <div className="modal-closer" onClick={handleClose}>
            <AiFillCloseCircle />
            </div>
            <div className="code-field">
            <div className="export-code">
                <h3>HTML</h3>
                <code><pre>                
                {htmlCode}                
                </pre></code>
            </div>
            <div className="export-code">
                <h3>CSS</h3>
                <code><pre>                
                {cssCode}                
                </pre></code>
            </div>
            </div>
            </section>
        </div>
    );
}

export default ExportModal;