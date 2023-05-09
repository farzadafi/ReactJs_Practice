import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Button from "../button";
import {useShop} from "../context/CounterContext";
import {ProductInterface} from "../../interfaces/ProductInterface";

const startArray = [...Array(5)];

interface Props {
  product: ProductInterface;
  id: string;
}

const Card = ({product, id}: Props) => {
  const {products, addToCard, removeFromCard} = useShop();

  const handleClick = () => {
    addToCard(product);
  };

  const handleRemoveClick = () => {
    removeFromCard(product);
  };

  return (
    <div id={id} className={"flex flex-col w-[31%] rounded-md border border-slate-500"}>
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
          products.includes(product) ? <Button onClick={handleRemoveClick} variant={"removeFromCard"}>Remove From Card</Button> :
            <Button onClick={handleClick} variant={"addToCard"}>add To Card</Button>
        }
      </div>
    </div>
  );
};

export default Card;