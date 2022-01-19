import { AiFillCloseCircle } from "react-icons/ai";
import { transformCss, transformHtml } from "../features/exportFunctionality";

export const ExportModal= ({ changeModal, buildingBlocks }) => {
    const handleClose = () => changeModal[1](!changeModal[0]);
    let htmlCode = `
<!DOCTYPE html>
<head>
<link rel="stylesheet" href="FILENAME.css">
<title>Lorem ipsum</title>
</head>
<body>
${transformHtml(buildingBlocks).join("\n")}
</body>`;
let cssCode = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    position: relative;
    height: 100vh;
}
body {
    display: flex;
    flex-direction: column;
    font-size: 18px;
}
${transformCss(buildingBlocks).join('\n')}
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
                <code>
                <pre>                
                {htmlCode}                
                </pre>
                </code>
            </div>
            <div className="export-code">
                <h3>CSS</h3>
                <code>
                <pre>                
                {cssCode}                
                </pre>
                </code>
            </div>
            </div>
            </section>
        </div>
    );
}

export default ExportModal;