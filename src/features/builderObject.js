import { IoDocumentTextSharp, IoImageSharp, IoImagesSharp, IoAppsSharp, IoMenu, IoJournalSharp } from "react-icons/io5";

export const builderObject = {
    div: ['Div', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    div2: ['SplitDiv', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    div3: ['TripleDiv', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    nav: ['Nav', <IoMenu key={Math.random()} className='text-4xl'/>],
    footer: ['Footer', <IoJournalSharp key={Math.random()} className='text-4xl rotate-90'/>],
    article: ['Article', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    img: ['Img', <IoImageSharp key={Math.random()} className='text-4xl'/>],
    img2: ['DoubleImg', <IoImagesSharp key={Math.random()} className='text-4xl'/>],
    table: ['Table', <IoAppsSharp key={Math.random()} className='text-4xl'/>]
}