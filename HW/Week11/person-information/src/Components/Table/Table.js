import elementGenerator from "../../library/elementGenerator";

const Table = () => {
    return (elementGenerator({
        element: 'table',
        className: 'w-auto mx-auto px-6 max-w-7xl',
        dir:'rtl',
        child: [
            elementGenerator({
                element: 'tr',
                className: '',
                child: [
                    elementGenerator({
                        element: 'th',
                        className: '',
                        child: 'شناسه'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: '',
                        child: 'نام'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: '',
                        child: 'نام خانوادگی'
                    }),
                    elementGenerator({
                        element: 'th',
                        className: '',
                        child: 'موبایل'
                    }), elementGenerator({
                        element: 'th',
                        className: '',
                        child: 'ایمیل'
                    }), elementGenerator({
                        element: 'th',
                        className: '',
                        child: 'عملیات'
                    })
                ]
            })
        ]
    }));
}

export default Table;