import Input from "@/Component/Input";
import {Button, CustomSelect} from "@/Component";
import {useState} from "react";
import {User} from "@/interfaces/userInterface";

interface Props {
  user?: User;
  setUser: (user: User) => void;
}

const Form = ({user, setUser}: Props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const [isFirstnameHidden, setIsFirstnameHidden] = useState(true);
  const [isLastnameHidden, setIsLastnameHidden] = useState(true);
  const [isPhoneNumberHidden, setIsPhoneNumberHidden] = useState(true);
  const [isRelationHidden, setIsRelationHidden] = useState(true);
  const [isEmailHidden, setIsEmailHidden] = useState(true);

  function enableButton() {
    if ((firstname.length > 0) && (lastname.length > 0) && (phoneNumber.length > 6) && (relation.length > 0) && (email.length > 0))
      setIsDisabled(false);
  }

  function handleClick() {
    if (onClickHandler()) {
      const newUser = {
        firstname,
        lastname,
        email,
        phoneNumber: +phoneNumber,
        relation
      };
      setUser(newUser);
    }
  }

  const firstnameOnchangeHandler = (e: string) => {
    setFirstname(e);
    enableButton();
  };

  const lastnameOnchangeHandler = (e: string) => {
    setLastname(e);
    enableButton();
  };


  const phoneNumberOnchangeHandler = (e: string) => {
    setPhoneNumber(e);
    enableButton();
  };

  const emailOnchangeHandler = (e: string) => {
    setEmail(e);
    enableButton();
  };

  const onClickHandlerCustomSelect = (e: string) => {
    setRelation(e);
    enableButton();
  };

  const onClickHandler = () => {
    firstname.length <= 2 ? setIsFirstnameHidden(false) : setIsFirstnameHidden(true);
    lastname.length <= 2 ? setIsLastnameHidden(false) : setIsLastnameHidden(true);
    phoneNumber.length <= 6 ? setIsPhoneNumberHidden(false) : setIsPhoneNumberHidden(true);
    relation === "" ? setIsRelationHidden(false) : setIsRelationHidden(true);
    email.length <= 6 ? setIsEmailHidden(false) : setIsEmailHidden(true);
    return ((firstname.length > 2) && (lastname.length > 2) && (phoneNumber.length > 6) && (relation !== "") && (email.length > 2));
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
      <Button isDisabled={isDisabled} onClick={handleClick} text={"اضافه کردن"}/>
    </div>
  );
};

export default Form;