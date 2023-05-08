import {ProductInterface} from "../../interfaces/ProductInterface";
import Card from "../card";
import Sidebar from "../sideBar";

interface Props {
  products: ProductInterface[];
}

const Main = ({products}: Props) => {
  return (
    <div className={"flex w-full bg-pink-[500]"}>
      <Sidebar/>
      <div className={"p-5 flex flex-wrap gap-8 w-[100%]"}>
        {
          products.length > 0 ? products.map(item => {
            return <Card key={item.id} product={item}/>;
          }) : null
        }
      </div>
    </div>
  );
};

export default Main;