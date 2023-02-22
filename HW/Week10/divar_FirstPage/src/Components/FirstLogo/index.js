import elementGenerator from "../../library/ElementGenerator.js";

const logo = () => {
    return elementGenerator({
        element: 'img',
        className: 'w-[6rem]',
        src: 'src/assets/img.png',
        alt: 'divar logo png image'
    })
}

export default logo;