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
            return '<div class="doubleDiv"/* flex */><div class="divBar">Div</div><div class="divBar">Div</div></div>';
            break;
            case "div3":
            return '<div class="doubleDiv"/* flex */><div class="divBar">Div</div><div class="divBar">Div</div><div class="divBar">Div</div></div>';
            break;
            case "footer":
            return '<footer class="footerT">footer</footer>';
            break;
            case "img":
            return '<img class="/* your img */" src="/* img url */" alt="/* img description */>';
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
    return blocks.map((block, index) => {
        if(blocks.indexOf(block) !== index) return;
        switch(block) {
            case "nav":
            return '.navBar {\n\tposition: fixed; \n\ttop: 0; \n\tleft: 0; \n\tdisplay:flex; \n\tjustify-content: space-between;\n}';
            break;
            case "div":
            return 'div /*add*/';
            break;
            case "div2":
            return 'div2 /*add*/';
            break;
            case "div3":
            return 'div3 /*add*/';
            break;
            case "footer":
            return '.footer-style {\n\tposition: fixed; \n\tbottom: 0; \n\tleft: 0; \n\tdisplay:flex; \n\tflex-direction: column;\n}';
            break;
            case "img":
            return 'img /*add*/';
            break;
            case "table":
            return 'table /*add*/';
            break;
            case "header":
            return 'header /*add*/';
            break;
            case "article":
            return 'article';
            break;
            default:
            return 'ERROR';
    }});
}