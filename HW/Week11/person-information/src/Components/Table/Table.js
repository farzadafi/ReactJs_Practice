import elementGenerator from "../../library/elementGenerator";

const Table = () => {
    return (elementGenerator({
        element: 'table',
        className: 'w-auto mx-auto px-6 max-w-7xl',
        dir:'rtl',
        child: [
            elementGenerator({
                element: 'tr',
                className: 'bg-[#72147e] text-white rounded-tr-3xl rounded-tl-3xl block',
                child: [
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6 font-vazir',
                        child: 'شناسه'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6 font-vazir',
                        child: 'نام'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6 font-vazir',
                        child: 'نام خانوادگی'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6 font-vazir',
                        child: 'موبایل'
                    }), elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6 font-vazir',
                        child: 'ایمیل'
                    }), elementGenerator({
                        element: 'th',
                        className: 'px-10 py-6 font-vazir',
                        child: 'عملیات'
                    })
                ]
            })
        ]
    }));
}

export default Table;