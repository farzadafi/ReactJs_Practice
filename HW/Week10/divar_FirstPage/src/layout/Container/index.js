import elementGenerator from "../../library/ElementGenerator";

const Container = (child) => {
    return (elementGenerator({
        element:'div',
        className:'w-[566px] mx-auto bg-green-500',
        child,
    }) );
}

export default Container;