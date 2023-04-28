import {Basket, Products} from "@/Component";
import { ActiveProducts} from "@/interfaces";
import {useState} from "react";

const Main = () => {
  const [activeProducts, setActiveProducts] = useState<ActiveProducts[]>([]);
  function setActiveProductHandler (activeProduct:ActiveProducts[]) {
    setActiveProducts(activeProduct)
  }

  return (
    <main className={"flex gap-2"}>
      <Products setActiveProducts={setActiveProductHandler} activeProducts={activeProducts}/>
      <Basket setActiveProducts={setActiveProductHandler} activeProducts={activeProducts}/>
      {/*{*/}
      {/*  activeProducts.length?<Basket activeProducts={activeProducts}/>: null*/}
      {/*}*/}
    </main>
  );
};

export default Main;