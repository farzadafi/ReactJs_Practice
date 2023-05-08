import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Button from "../button";
import {useShop} from "../context/CounterContext";

const startArray = [...Array(5)];

const Card = ({product}) => {
  const { products, addToCard } = useShop()

  const handleClick = () => {
    addToCard(product)
  }

  return (
    <div className={"flex flex-col w-[31%] rounded-md border border-slate-500"}>
      <img src="./../../../public/transport.jpeg" alt="naser"/>
      <div className={"p-6 space-y-1"}>
        <h3>{product.name}</h3>
        <h1>farzad</h1>
        <h1>{products.length}</h1>
        <p>{product.price}</p>
        <p>{"fast delivery"}</p>
        <div className={"flex"}>
          {
            startArray.map((value, index) => {
              if (index < product.ratings)
                return <AiFillStar key={index}/>;
              else
                return <AiOutlineStar key={index}/>;
            })
          }
        </div>
        <Button onClick={handleClick} variant={"addToCard"}>
          add To Card
        </Button>
      </div>
    </div>
  );
};

export default Card;