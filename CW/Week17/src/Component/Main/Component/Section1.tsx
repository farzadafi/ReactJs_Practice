import React from "react";
import InputMaker from "../../InputMaker/InputMaker";

function Section1() {
    return (
        <div className={"w-full flex"}>
            <div className={"bg-[#5b5bff] flex justify-end gap-12 items-center flex-col h-64 p-10 text-white flex-1"}>
                <p>بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما کمک میکند تا با سرعت و سهولت
                    اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید</p>
                <button className={"bg-[#0101aa] p-1"}>
                    ثبت نام و ایجاد وبلاگ جدید
                </button>
            </div>
            <div className={"bg-blue-500 p-4 bg-gray-200"}>
                <form className={"flex flex-col w-96 gap-5"}>
                    <InputMaker type={"text"} placeholder={"نام کاربری"} className={"h-10 border border-slate-500 outline-none text-center"} />
                    <InputMaker type={"password"} placeholder={"رمز عبور"} className={"h-10 border border-slate-500 outline-none text-center"} />
                    <InputMaker type={"submit"} value={"ورود به بخش مدیریت وبلاگ"} className={"bg-[#4444ff] py-2 text-white"} />
                    <a className={"text-center text-[#4444ff] text-sm mt-4"} href="/">کلمه عبور خود را فراموش کرده ام</a>
                </form>
            </div>
        </div>
    )
}

export default Section1
