import elementGenerator from "../../library/elementGenerator";

const header = ['شناسه', 'نام', 'نام خانوادگی', 'موبایل', 'ایمیل', 'عملیات'];
const inputData = [
    ['1', 'farzad', 'afshar', '0913', 'farzadAfi50@', 'operation'],
    ['2', 'farzad', 'afshar', '0913', 'farzadAfi50@', 'operation'],
    ['3', 'farzad', 'afshar', '0913', 'farzadAfi50@', 'operation']
]

const Table = () => {
    const dataArray = [];
    for (const key in header) {
        dataArray.push(elementGenerator({
            element: 'th',
            className: 'px-10 py-6 font-vazir',
            child: `${header[key]}`
        }));
    }

    const dataArr = [];
    dataArr.push(elementGenerator({
        element: 'tr',
        className: 'bg-[#72147e] text-white rounded-tr-3xl rounded-tl-3xl',
        child: dataArray
    }))
    for (let i = 0; i < inputData.length; i++) {
        let tdArray = [];
        for (let j = 0; j < inputData[i].length; j++) {
            tdArray.push(elementGenerator({
                element: 'td',
                className: '',
                child: `${inputData[i][j]}`
            }))
        }
        dataArr.push(elementGenerator({
            element: 'tr',
            className: '',
            child: tdArray
        }))
    }

    return (elementGenerator({
        element: 'table',
        className: 'w-auto mx-auto px-6 max-w-7xl',
        dir: 'rtl',
        child: dataArr
        // child: [
        //     elementGenerator({
        //         element: 'tr',
        //         className: 'bg-[#72147e] text-white rounded-tr-3xl rounded-tl-3xl block',
        //         child: dataArray
        //     })
        // ]
    }));
}

export default Table;