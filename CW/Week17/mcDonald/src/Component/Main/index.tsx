import React from "react";
import Card from "../Card";

const berger = [
  {
    id: 1,
    bergerName: "همرگر معمولی",
    price: "۸۰۰۰ تومان",
    image: "./public/image/hamburger.png"
  },
];

const Main = () => {
  return (
    <main className={"flex justify-center"}>
      {
        berger.map( ({bergerName, price, image}) => {
          return <Card name={bergerName} price={price} image={image}/>
        })
      }
    </main>
  );
};

export default Main;