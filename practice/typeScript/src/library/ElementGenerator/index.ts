interface ElementGeneratorProps {
    element: keyof HTMLElementTagNameMap;
    child?: Node | Node[];
    restAttrs?: { [key: string]: string };
    eventListener?: { event: string; callback: EventListener }[];
    [key: string]: any;
}

export const ElementGenerator = ({ element, child, restAttrs = {}, eventListener, ...rest }: ElementGeneratorProps): HTMLElement => {
    const elem = document.createElement(element);
    for (const key in rest) {
        // @ts-ignore
        elem[key] = rest[key];
    }
    for (const key in restAttrs) {
        elem.setAttribute(key, restAttrs[key]);
    }
    if (child) Array.isArray(child) ? elem.append(...child) : elem.append(child);
    if (eventListener) {
        eventListener.map((el) => elem.addEventListener(el.event, el.callback));
    }
    return elem;
};