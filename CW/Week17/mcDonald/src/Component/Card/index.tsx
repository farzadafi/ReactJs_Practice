import React from "react";

type cardProps = {
  name: string,
  price: string,
  image: string
}

const Card = ({name, price, image}: cardProps) => {
  return (
    <div className={"flex justify-end text-right p-1"}>
      <div className={"flex flex-col justify-between py-2 w-full gap-2"}>
        <div>
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
        <div>
          <div className={"flex justify-between"}>
            <p className={"text-right rtl"}>۰ تومان</p>
            <div className={"flex"}>
              <button className={"p-1 bg-red-800 rounded-bl-md rounded-tl-md"}>
                <img className={"w-4 "} src="../../../public/image/minus.png" alt="add.png"/>
              </button>
              <div className={"w-6 bg-gray-500 flex justify-center items-center"}>
                <p className={""}>۰</p>
              </div>
              <button className={"p-1 bg-red-800 rounded-tr-md rounded-br-md"}>
                <img className={"w-4 "} src="../../../public/image/add.png" alt="add.png"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt={name} className={"w-72"}/>
      </div>
    </div>
  );
};

export default Card;