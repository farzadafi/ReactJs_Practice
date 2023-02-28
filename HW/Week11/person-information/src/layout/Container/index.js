import elementGenerator from "../../library/elementGenerator";

const Container = (child) => {
    return (elementGenerator({
        element:'div',
        className:'max-w-7xl absolute translate-x-[50rem] translate-y-[30rem]',
        child,
    }) );
}

export default Container;