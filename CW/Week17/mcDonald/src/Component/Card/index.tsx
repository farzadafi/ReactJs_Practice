import React, {useState} from "react";
import Button from "../Button";
import {v4 as uuidv4} from "uuid";
import {LocalDateTime} from "@js-joda/core";

type cardProps = {
  name: string,
  price: string,
  image: string,
  quantity: number
}


const randomIdWithTimestamp = (): string => {
  const uuid = uuidv4();
  const timestamp = LocalDateTime.now().toString();
  return `${uuid}-${timestamp}`;
};

const minusImg: JSX.Element = <img src={"../../../public/image/minus.png"} className={"w-4"} alt={"minus"}/>;
const plusImg: JSX.Element = <img src={"../../../public/image/add.png"} className={"w-4"} alt={"plus"}/>;

const Card = ({name, price, image, quantity}: cardProps) => {
  const id = randomIdWithTimestamp();
  const [count, setCount] = useState(quantity);
  const [priceQuan, setPriceQuan] = useState(0);

  const plusQuantity = () => {
    setCount(count + 1);
    const priceString: string = price.replace(/\D/g, "");
    const priceNumber: number = parseInt(priceString);
    setPriceQuan(priceQuan + priceNumber);
  };

  const minusQuantity = () => {
    if (count >= 1) {
      setCount(count - 1);
      const priceString: string = price.replace(/\D/g, "");
      const priceNumber: number = parseInt(priceString);
      setPriceQuan(priceQuan - priceNumber);
    }
  };

  return (
    <div key={id} className={"flex justify-end text-right p-1 bg-white max-w-xs m-4 rounded-md"}>
      <div className={"flex flex-col justify-between py-2 w-full gap-2"}>
        <div>
          <h2 className={"font-bold"}>{name}</h2>
          <p className={"text-gray-500"}>{price}</p>
        </div>
        <div>
          <div className={"flex justify-between text-gray-500"}>
            <div className={"flex justify-center items-center gap-2"}>
              <p className={"rtl-dir"}>تومان</p>
              <p>{priceQuan}</p>
            </div>
            <div className={"flex"}>
              <Button onclickFunction={minusQuantity} classes={"rounded-tl-md rounded-bl-md"} child={minusImg}
                      variant={"counter"}/>
              <div className={"w-6 bg-gray-200 flex justify-center items-center"}>
                <p>{count}</p>
              </div>
              <Button onclickFunction={plusQuantity} classes={"rounded-tr-md rounded-br-md"} child={plusImg}
                      variant={"counter"}/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt={name} className={"w-72 h-32"}/>
      </div>
    </div>
  );
};

export default Card;