export const transformHtml = (blocks) => {
    return blocks.map(block => {
        switch(block) {
            case "nav":
            return '<nav class="navBar">Nav</nav>';
            break;
            case "div":
            return '<div class="divBar">Div</div>';
            break;
            case "div2":
            return '<div class="div2">\n\t<div class="div2--div">Div</div>\n\t<div class="div2--div">Div</div>\n</div>';
            break;
            case "div3":
            return '<div class="div3">\n\t<div class="div3--div">Div</div>\n\t<div class="div3--div">Div</div>\n\t<div class="div3--div">Div</div>\n</div>';
            break;
            case "footer":
            return '<footer class="footerBar">footer</footer>';
            break;
            case "img":
            return '<img class="page--img" src="/* img url */" alt="/* img description */">';
            break;
            case "table":
            return '<table class="/* your table */">Table</table>';
            break;
            case "header":
            return '<header class="header">Header</header>';
            break;
            case "article":
            return '<article class="article">Article</article>';
            break;
            default:
            return 'ERROR';
        }
    })}
export const transformCss = (blocks) => {
    const divCss = `.divBar {
    margin-top: 50px;
    max-width: 1220px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
    border-radius: 8px;
}`
    const navBarCss = `.navBar {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
}`

    const div3BarCss = `.div3 {
    margin-top: 50px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.div3--div {
    max-width: 393.333333px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
    border-radius: 8px;
    margin-left: 20px;
}
.div3--div:first-child {
    margin-left: 0;
}
.div3 > div {
    width: 30%;
}`

const div2BarCss = `.div2 {
    margin-top: 50px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.div2--div {
    max-width: 600px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
    border-radius: 8px;
}
.div2 > div {
    width: 50%;
}
.div2 > div:last-child {
    margin-left: 20px;
}`

const footerBarCss = `.footerBar {
    margin-top: 50px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
}`

const imgCss = `.page--img {
    margin-top: 50px;
    width: 100%;
    max-width: 800px;
    height: 300px;
    background: lightblue;
    border-radius: 8px;
}`

const articleCss = `.article {
    margin-top: 50px;
    max-width: 1220px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
    border-radius: 8px;
}`

const headerCss = `.header {
    margin-top: 50px;
    max-width: 1220px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
    border-radius: 8px;
}` 

    return blocks.map((block, index) => {
        if(blocks.indexOf(block) !== index) return;
        switch(block) {
            case "nav":
            return navBarCss;
            break;
            case "div":
            return divCss;
            break;
            case "div2":
            return div2BarCss;
            break;
            case "div3":
            return div3BarCss;
            break;
            case "footer":
            return footerBarCss;
            break;
            case "img":
            return imgCss;
            break;
            case "table":
            return 'table /*add*/';
            break;
            case "header":
            return headerCss;
            break;
            case "article":
            return articleCss;
            break;
            default:
            return 'ERROR';
    }});
}