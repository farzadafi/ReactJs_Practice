import elementGenerator from "../../library/elementGenerator";

const header = ['شناسه', 'نام', 'نام خانوادگی', 'موبایل', 'ایمیل', 'عملیات'];
const inputData = [
    ['۱', 'فرزاد', 'افشار', '۰۹۱۳', 'ایمیل', 'عملیات'],
    ['۲', 'فرزاد', 'افشار', '۰۹۱۳', 'ایمیل', 'عملیات'],
    ['۳', 'فرزاد', 'افشار', '۰۹۱۳', 'ایمیل', 'عملیات'],
]

const Table = () => {
    const headerArray = [];
    for (const key in header) {
        headerArray.push(elementGenerator({
            element: 'th',
            className: 'px-10 py-6 font-vazir w-36',
            child: `${header[key]}`
        }));
    }
    const dataArray = [];
    dataArray.push(elementGenerator({
        element: 'tr',
        className: 'bg-[#72147e] text-white rounded-tr-3xl rounded-tl-3xl block',
        child: headerArray
    }))

    for (let i = 0; i < inputData.length; i++) {
        let tdArray = [];
        for (let j = 0; j < inputData[i].length; j++) {
            tdArray.push(elementGenerator({
                element: 'td',
                className: 'px-10 py-6 font-vazir w-36 text-center',
                child: `${inputData[i][j]}`
            }))
        }
        dataArray.push(elementGenerator({
            element: 'tr',
            className: 'bg-gray-100 block',
            child: tdArray
        }))
    }

    return (elementGenerator({
        element: 'table',
        className: 'w-auto mx-auto px-6 max-w-7xl',
        dir: 'rtl',
        child: dataArray
    }));
}

export default Table;