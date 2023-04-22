import React from 'react';

const Footer = () => {
    return (
        <div>
            <ul className={"flex gap-2 justify-center mt-10"}>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-blue-800"} href="">وبلاگ های بروز شده
                    </a>
                </li>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-blue-800"} href="">فهرست وبلاگ ها</a>
                </li>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-blue-800"} href="">ثبت وبلاگ جدید</a>
                </li>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-blue-800"} href="">راهنما</a>
                </li>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-red-800"} href="">تبلیغات در وبلاگ ها</a>
                </li>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-blue-800"} href="">گزارش تخلف</a>
                </li>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-blue-800"} href="">اخبار سایت</a>
                </li>
                <li>
                    <a className={"before:content-['|'] before:px-5 text-blue-800"} href="">تماس با ما</a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;