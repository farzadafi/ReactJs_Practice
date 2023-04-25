import React from "react";
import Button from "../Button";
import { useSelector } from "react-redux";

type AppState = {
  price: number;
};

const tick:JSX.Element = <img alt={"tick"} src={"../../../public/image/tick.png"} className={"w-8 p-2"}/>
const register: JSX.Element = <p>ثبت سفارش</p>

const Basket = () => {
  const price = useSelector((state: AppState) => state.price);
  return (
    <div className={"flex flex-col w-full p-4 rtl-dir rounded-xl gap-2 bg-gray-200 m-4 max-w-xs"}>
      <div className={"flex justify-between text-gray-500"}>
        <p>جمع کل سفارشات:</p>
        <div className={"flex gap-1"}>
          <p>{price}</p>
          <p className={"direction-ltr text-right"}> تومان</p>
        </div>
      </div>
      <div className={"flex justify-between text-gray-500"}>
        <p>حق سرویس و کارمزد:</p>
        <p className={"direction-ltr text-right"}>۰ تومان</p>
      </div>
      <div className={"flex justify-between text-gray-500"}>
        <p>تخفیف:</p>
        <p className={"direction-ltr text-right"}>۰ تومان</p>
      </div>
      <div className={"relative"}>
        <input className={"w-full h-8 p-2 rounded-md"} placeholder={"کد تخفیف"} type="text"/>
        <Button variant={"tick"} classes={""} child={tick}/>
      </div>
      <div className={"flex justify-between mt-5 bg-yellow-400 p-2 rounded-md"}>
        <p>مبلغ قابل پرداخت:</p>
        <p>۰ تومان</p>
      </div>
      <Button variant={"pay"} classes={""} child={register}/>
    </div>
  );
};

export default Basket;