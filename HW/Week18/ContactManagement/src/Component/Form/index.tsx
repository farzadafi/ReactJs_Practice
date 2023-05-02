import Input from "@/Component/Input";
import {Button, CustomSelect} from "@/Component";
import {useState} from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState("");

  const firstnameOnchangeHandler = (e: string) => {
    setFirstname(e);
  };

  const lastnameOnchangeHandler = (e: string) => {
    setLastname(e);
  };

  const phoneNumberOnchangeHandler = (e: string) => {
    setPhoneNumber(e);
  };
  
  const emailOnchangeHandler = (e: string) => {
    setEmail(e);
  };

  const onClickHandlerCustomSelect = (e:string) => {
    setRelation(e)
  }

  const onClickHandler = () => {
  };

  return (
    <div className={"flex justify-center flex-col items-center gap-4 bg-pink-300 rounded-md mt-2 w-72 p-4 mx-auto"}>
      <p className={"text-center"}>وب اپلیکیشن مدیریت مخاطبین</p>
      <Input placeHolder={"نام ..."} name={"firstname"} onChange={(e) => firstnameOnchangeHandler(e)}
             value={firstname}/>
      <Input placeHolder={"نام خانوادگی ..."} name={"firstname"} onChange={(e) => lastnameOnchangeHandler(e)}
             value={lastname}/>
      <Input placeHolder={"شماره تماس ..."} name={"firstname"} onChange={(e) => phoneNumberOnchangeHandler(e)}
             value={phoneNumber}/>
      <CustomSelect onClick={ (value) => onClickHandlerCustomSelect(value)}/>
      <Input placeHolder={"ایمیل ..."} name={"firstname"} onChange={ (e) => emailOnchangeHandler(e)} value={email}/>
      <Button onClick={onClickHandler} text={"اضافه کردن"}/>
    </div>
  );
};

export default Form;