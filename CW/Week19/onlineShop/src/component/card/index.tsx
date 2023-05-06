import {ProductInterface} from "../../interfaces/ProductInterface";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Button from "../button";

interface Props {
  product: ProductInterface;
}

const startArray = [...Array(5)];

const Card = ({product}: Props) => {
  return (
    <div className={"flex flex-col w-[31%] rounded-md border border-slate-500"}>
      <img src="./../../../public/transport.jpeg" alt="naser"/>
      <div className={"p-6 space-y-1"}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{"fast delivery"}</p>
        <div className={"flex"}>
          {
            startArray.map((value, index) => {
              if (index < product.ratings)
                return <AiFillStar/>;
              else
                return <AiOutlineStar/>;
            })
          }
        </div>
        <Button variant={"addToCard"}>
          add To Card
        </Button>
      </div>
    </div>
  );
};

export default Card;