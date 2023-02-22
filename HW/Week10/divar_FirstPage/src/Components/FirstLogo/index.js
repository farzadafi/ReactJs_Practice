import elementGenerator from "../../library/ElementGenerator.js";

const logo = () => {
    return elementGenerator({
        element: 'img',
        className: 'w-[6rem] m-auto',
        src: 'src/assets/img.png',
        alt: 'divar logo png image'
    })
}

export default logo;