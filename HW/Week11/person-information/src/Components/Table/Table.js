import elementGenerator from "../../library/elementGenerator";

const Table = () => {
    return (elementGenerator({
        element: 'table',
        className: 'w-auto mx-auto px-6 max-w-7xl',
        dir:'rtl',
        child: [
            elementGenerator({
                element: 'tr',
                className: 'bg-[#72147e] text-white',
                child: [
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6',
                        child: 'شناسه'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6',
                        child: 'نام'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6',
                        child: 'نام خانوادگی'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6',
                        child: 'موبایل'
                    }), elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6',
                        child: 'ایمیل'
                    }), elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6',
                        child: 'عملیات'
                    })
                ]
            })
        ]
    }));
}

export default Table;