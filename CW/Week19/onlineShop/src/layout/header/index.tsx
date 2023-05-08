import {Input, useShop} from "../../component";
import { useState } from "react";
import Button from "../../component/button";
import {IoCartSharp, MdOutlineArrowDropDown} from "react-icons/all";


const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const { products, addToCard} = useShop();
  const [isEnable, setEnable] = useState(true)
  //
  const onchangeHandler = (value: string) => {
    setSearchInput(value);
  };

  const onClickHandler = () => {
    alert("farzad")
    isEnable ? setEnable(false) : setEnable(true)
  }

  return (
    <header className={"flex bg-gray-700 justify-center items-center gap-40 h-16 text-white"}>
      <a href="">Shopping Cart</a>
      <Input value={searchInput} placeHolder={"Search a Product..."} setInput={(e) => onchangeHandler(e)}/>
      <Button onClick={onClickHandler} variant={"shoppingCartButton"}>
        <IoCartSharp className={"text-4xl"}/>
        <p>{products.length}</p>
        <MdOutlineArrowDropDown className={"text-2xl"}/>
        <div className={'text-black top-[3.3rem] right-[15.6rem] w-72 rounded-md bg-white border border-slate-500 ' + (isEnable ? 'hidden' : 'absolute')}>farzad</div>
      </Button>
    </header>
  );
};

export default Header;