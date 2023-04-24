import React from "react";
import Card from "../Card";
import Basket from "../Basket";

const berger = [
  {
    id: 1,
    bergerName: "همبرگر معمولی",
    price: "8000 تومان",
    image: "./public/image/hamburger.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "همبرگر مخصوص",
    price: "10000 تومان",
    image: "./public/image/hamburger.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "همبرگر معمولی با قارچ و پنیر",
    price: "10000 تومان",
    image: "./public/image/hamburger.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "همبرگر مخصوص با قارچ و پنیر",
    price: "20000 تومان",
    image: "./public/image/hamburger.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "سیب زمینی سرخ کرده ویژه",
    price: "25000 تومان",
    image: "./public/image/french_fries.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "سیب زمینی سرخ کرده",
    price: "10000 تومان",
    image: "./public/image/french_fries.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "نوشابه رژیمی",
    price: "6000 تومان",
    image: "./public/image/soda.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "نوشابه ",
    price: "5000 تومان",
    image: "./public/image/soda.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "سالاد فصل ",
    price: "8000 تومان",
    image: "./public/image/salad.png",
    quantityNumber : 0
  },
  {
    id: 1,
    bergerName: "سالاد سزار ",
    price: "25000 تومان",
    image: "./public/image/ceasar.png",
    quantityNumber : 0
  },
];

const Main = () => {
  return (
    <main className={"flex justify-center flex-wrap"}>
      {
        berger.map(({bergerName, price, image, quantityNumber}) => {
          return <Card name={bergerName} price={price} image={image} quantity={quantityNumber}/>;
        })
      }
    <Basket/>
    </main>
  );
};

export default Main;