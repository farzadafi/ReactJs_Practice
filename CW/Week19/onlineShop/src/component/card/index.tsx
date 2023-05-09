import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Button from "../button";
import {useShop} from "../context/CounterContext";
import {ProductInterface} from "../../interfaces/ProductInterface";
import {useState} from "react";

const startArray = [...Array(5)];

interface Props {
  product: ProductInterface;
}

const Card = ({product}: Props) => {
  const {addToCard, removeFromCard} = useShop();
  const [isExist, setExist] = useState(false);

  const handleClick = () => {
    addToCard(product);
    setExist(true);
  };

  const handleRemoveClick = () => {
    removeFromCard(product);
    setExist(false);
  };

  return (
    <div className={"flex flex-col w-[31%] rounded-md border border-slate-500"}>
      <img src="./../../../public/transport.jpeg" alt="naser"/>
      <div className={"p-6 space-y-1"}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{"fast delivery"}</p>
        <div className={"flex"}>
          {
            startArray.map((_value, index) => {
              if (index < product.ratings)
                return <AiFillStar key={index}/>;
              else
                return <AiOutlineStar key={index}/>;
            })
          }
        </div>
        {
          isExist ? <Button onClick={handleRemoveClick} variant={"removeFromCard"}>Remove From Cart</Button> :
            <Button onClick={handleClick} variant={"addToCard"}>
              Add To Card
            </Button>
        }
      </div>
    </div>
  );
};

export default Card;