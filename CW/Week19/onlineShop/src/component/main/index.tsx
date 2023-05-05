import {ProductInterface} from "../../interfaces/ProductInterface";
import Card from "../card";

interface Props {
  products : ProductInterface[]
}

const Main = ({products}:Props) => {
  return (
    <div className={"p-5 flex flex-wrap gap-8"}>
      {
        products.length > 0 ? products.map(item => {
         return <Card product={item}/>
        }) : null
      }
    </div>
  );
};

export default Main;