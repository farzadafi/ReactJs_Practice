import elementGenerator from "../../library/ElementGenerator.js";

const navbar = () => {
    return elementGenerator({
        element: 'div',
        className: 'flex flex-row-reverse gap-11',
        child: [
            elementGenerator({
                element: 'a',
                child: 'ثبت آگهی'
            }), elementGenerator({
                element: 'a',
                child: 'درباره دیوار'
            }), elementGenerator({
                element: 'a',
                child: 'دریافت دیوار'
            }), elementGenerator({
                element: 'a',
                child: 'بلاگ'
            }), elementGenerator({
                element: 'a',
                child: 'پشتیبانی'
            }),
        ]
    })
}

export default navbar