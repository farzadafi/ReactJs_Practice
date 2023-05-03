import Input from "@/Component/Input";
import {Button, CustomSelect} from "@/Component";
import {useState} from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState("");

  const [isFirstnameHidden, setIsFirstnameHidden] = useState(true);
  const [isLastnameHidden, setIsLastnameHidden] = useState(true);
  const [isPhoneNumberHidden, setIsPhoneNumberHidden] = useState(true);
  const [isRelationHidden, setIsRelationHidden] = useState(true);
  const [isEmailHidden, setIsEmailHidden] = useState(true);

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

  const onClickHandlerCustomSelect = (e: string) => {
    setRelation(e);
  };

  const onClickHandler = () => {
    firstname.length <= 2 ? setIsFirstnameHidden(false) : setIsFirstnameHidden(true);
    lastname.length <= 2 ? setIsLastnameHidden(false) : setIsLastnameHidden(true);
    lastname.length <= 6 ? setIsPhoneNumberHidden(false) : setIsPhoneNumberHidden(true);
    relation === "" ? setIsRelationHidden(false) : setIsRelationHidden(true);
    email.length <= 6 ? setIsEmailHidden(false) : setIsEmailHidden(true);
  };

  return (
    <div className={"flex justify-center flex-col items-center gap-4 bg-pink-300 rounded-md mt-2 w-72 p-4 mx-auto"}>
      <p className={"text-center"}>وب اپلیکیشن مدیریت مخاطبین</p>
      <div className={"w-full"}>
        <Input placeHolder={"نام ..."} name={"firstname"} onChange={(e) => firstnameOnchangeHandler(e)}
               value={firstname}/>
        {isFirstnameHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            نام نمیتواند کمتر از ۲ کارکتر باشد </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"نام خانوادگی ..."} name={"firstname"} onChange={(e) => lastnameOnchangeHandler(e)}
               value={lastname}/>
        {isLastnameHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            نام خانوادگی نمیتواند کمتر از ۲ کارکتر باشد </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"شماره تماس ..."} name={"firstname"} onChange={(e) => phoneNumberOnchangeHandler(e)}
               value={phoneNumber}/>
        {isPhoneNumberHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            یک شماره معتبر وارد کنید</p>
        )}
      </div>
      <div className={"w-full"}>
        <CustomSelect onClick={(value) => onClickHandlerCustomSelect(value)}/>
        {isRelationHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            یک نسبت انتخاب کنید </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"ایمیل ..."} name={"firstname"} onChange={(e) => emailOnchangeHandler(e)} value={email}/>
        {isEmailHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            یک ایمیل معتبر وارد کنید </p>
        )}
      </div>
      <Button onClick={onClickHandler} text={"اضافه کردن"}/>
    </div>
  );
};

export default Form;