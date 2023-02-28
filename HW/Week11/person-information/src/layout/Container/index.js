import elementGenerator from "../../library/elementGenerator";

const Container = (child) => {
    return (elementGenerator({
        element:'div',
        className:'w-auto mx-auto px-6 max-w-7xl',
        child,
    }) );
}

export default Container;