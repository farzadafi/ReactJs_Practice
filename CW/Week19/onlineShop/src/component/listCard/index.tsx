import {ProductInterface} from "../../interfaces/ProductInterface";
import {RiDeleteBin7Fill} from "react-icons/all";
import Button from "../button";
import {useShop} from "../context/CounterContext";

interface Props {
  product: ProductInterface;
}


const ListCard = ({product}: Props) => {
  const {removeFromCard} = useShop();

  const onClickRemoveHandler = () => {
    removeFromCard(product)
  }

  return (
    <div className={"flex justify-between items-center hover:cursor-auto"}>
      <div className={"flex gap-3"}>
        <img className={"w-14 h-14 rounded-[50%]"} src={product.image} alt="product image"/>
        <div className={"flex flex-col justify-center items-start"}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
      <Button onClick={onClickRemoveHandler} variant={"addToCard"} classes={"bg-white"}>
        <RiDeleteBin7Fill/>
      </Button>
    </div>
  );
};

export default ListCard;