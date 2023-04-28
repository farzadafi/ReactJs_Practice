import Button from "@/Component/Button";

interface card {
  url:string;
  name:string;
  price:number;
  addProduct: () => void
}


const Card = ({url, name, price, addProduct}:card) => {
  return (
    <div className={"w-72 space-y-3 group cursor-pointer"}>
      <img src={url} alt="" className={""}/>
      <p className={"text-center group-hover:text-orange-500"}>{name}</p>
      <div className={"flex justify-between items-center"}>
        <p className={"text-center"}>{price}</p>
        <Button variant={"AddToCard"} classes={""} text={"Add To Card"} onClick={addProduct}/>
      </div>
    </div>
  );
};

export default Card;