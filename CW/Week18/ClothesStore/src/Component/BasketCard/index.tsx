import {ActiveProducts} from "@/interfaces";
import Button from "@/Component/Button";

interface Props {
  activeProduct: ActiveProducts;
  removeProduct: () => void
}

const BasketCard = ({activeProduct, removeProduct}:Props) => {
  return (
    <div className={"flex justify-between"}>
      <img src={activeProduct.image} className={"w-14"} alt="naser"/>
      <div>
        <p>{activeProduct.name}</p>
        <div className={"flex items-center justify-center gap-2"}>
          <p>${activeProduct.price}</p>
          <p>x{activeProduct.quantity}</p>
          <Button variant={"BasketCardButton"} text={"remove"} onClick={removeProduct}/>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;