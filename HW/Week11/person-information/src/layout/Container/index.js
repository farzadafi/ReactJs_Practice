import elementGenerator from "../../library/elementGenerator";

const Container = (child) => {
    return (elementGenerator({
        element:'div',
        className:'max-w-7xl absolute translate-x-[35rem] translate-y-[25rem]',
        child,
    }) );
}

export default Container;