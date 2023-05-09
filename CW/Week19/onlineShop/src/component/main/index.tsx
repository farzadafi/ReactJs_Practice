import {ProductInterface} from "../../interfaces/ProductInterface";
import Card from "../card";
import * as React from 'react';
import Sidebar from "../sideBar";

interface Props {
  products: ProductInterface[];
}

const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement;
  console.log(target.id);
}

const Main = ({products}: Props) => {
  return (
    <div className={"flex w-full bg-pink-[500]"}>
      <Sidebar onClick={handleClick}/>
      <div className={"p-5 flex flex-wrap gap-8 w-[100%]"}>
        {
          products.length > 0 ? products.map(item => {
            return <Card id={item.id} key={item.id} product={item}/>;
          }) : null
        }
      </div>
    </div>
  );
};

export default Main;