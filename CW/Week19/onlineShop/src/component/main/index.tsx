import {ProductInterface} from "../../interfaces/ProductInterface";
import Card from "../card";
import * as React from "react";
import {useState} from "react";
import Sidebar from "../sideBar";

interface Props {
  products: ProductInterface[];
}


const Main = ({products}: Props) => {
  const [filterProduct, setFilterProduct] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFilterProduct(target.id);
  };

  const filteredProduct = (products: ProductInterface[]) => {
    let resultProduct;
    switch (filterProduct) {
    case "":
      resultProduct = products;
      break;
    case "asc" :
      resultProduct = products.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      break;
    case "desc" :
      resultProduct = products.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      break;
    default :
      resultProduct = products;
    }
    return resultProduct;
  };

  return (
    <div className={"flex w-full bg-pink-[500]"}>
      <Sidebar onClick={handleClick}/>
      <div className={"p-5 flex flex-wrap gap-8 w-[100%]"}>
        {
          products.length > 0 ? filteredProduct(products).map(item => {
            return <Card id={item.id} key={item.id} product={item}/>;
          }) : null
        }
      </div>
    </div>
  );
};

export default Main;