import {Input, useShop} from "../../component";
import { useState } from "react";
import Button from "../../component/button";
import {IoCartSharp, MdOutlineArrowDropDown} from "react-icons/all";


const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const { products, addToCard} = useShop();
  //
  const onchangeHandler = (value: string) => {
    setSearchInput(value);
  };

  return (
    <header className={"flex bg-gray-700 justify-center items-center gap-40 h-16 text-white"}>
      <a href="">Shopping Cart</a>
      <Input value={searchInput} placeHolder={"Search a Product..."} setInput={(e) => onchangeHandler(e)}/>
      <Button variant={"shoppingCartButton"}>
        <IoCartSharp className={"text-4xl"}/>
        <p>{products.length}</p>
        <MdOutlineArrowDropDown className={"text-2xl"}/>
      </Button>
    </header>
  );
};

export default Header;