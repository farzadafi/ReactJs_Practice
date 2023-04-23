import React from "react";
import Card from "../Card";

const berger = [
  {
    id: 1,
    bergerName: "همبرگر معمولی",
    price: "۸۰۰۰ تومان",
    image: "./public/image/hamburger.png"
  },
  {
    id: 1,
    bergerName: "همبرگر مخصوص",
    price: "۱۰۰۰۰ تومان",
    image: "./public/image/hamburger.png"
  },
  {
    id: 1,
    bergerName: "همبرگر معمولی با قارچ و پنیر",
    price: "۱۰۰۰۰ تومان",
    image: "./public/image/hamburger.png"
  },
  {
    id: 1,
    bergerName: "همبرگر مخصوص با قارچ و پنیر",
    price: "۲۰۰۰۰ تومان",
    image: "./public/image/hamburger.png"
  },
  {
    id: 1,
    bergerName: "سیب زمینی سرخ کرده ویژه",
    price: "۲۵۰۰۰ تومان",
    image: "./public/image/french_fries.png"
  },
  {
    id: 1,
    bergerName: "سیب زمینی سرخ کرده",
    price: "۱۰۰۰۰ تومان",
    image: "./public/image/french_fries.png"
  },
  {
    id: 1,
    bergerName: "نوشابه رژیمی",
    price: "۶۰۰۰ تومان",
    image: "./public/image/soda.png"
  },
  {
    id: 1,
    bergerName: "نوشابه ",
    price: "۵۰۰۰ تومان",
    image: "./public/image/soda.png"
  },
  {
    id: 1,
    bergerName: "سالاد فصل ",
    price: "۸۰۰۰ تومان",
    image: "./public/image/salad.png"
  },
  {
    id: 1,
    bergerName: "سالاد سزار ",
    price: "۲۵۰۰۰ تومان",
    image: "./public/image/ceasar.png"
  },
];

const Main = () => {
  return (
    <main className={"flex justify-center flex-wrap"}>
      {
        berger.map(({bergerName, price, image}) => {
          return <Card name={bergerName} price={price} image={image}/>;
        })
      }
    </main>
  );
};

export default Main;