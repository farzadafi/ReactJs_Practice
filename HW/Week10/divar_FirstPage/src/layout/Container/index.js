import elementGenerator from "../../library/ElementGenerator";

const Container = (child) => {
    return (elementGenerator({
        element:'div',
        className:'w-[566px] mx-auto min-h-screen flex flex-col items-center justify-center',
        child,
    }) );
}

export default Container;