const elementGenerator = ({element, child , ...rest}) => {
    const el = document.createElement(element);
    for (const key in rest) {
        el[key] = rest[key]
    }
    (Array.isArray(child)) ? el.append(...child) : el.append(child)
    return el;
}

export default elementGenerator;