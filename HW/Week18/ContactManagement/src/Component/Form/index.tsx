import Input from "@/Component/Input";
import {Button, CustomSelect} from "@/Component";
import {useState} from "react";

interface Props {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  relation: string;
  firstnameInputChange: (value:string) => void;
  lastnameInputChange: (value:string) => void;
  phoneNumberInputChange: (value:string) => void;
  emailInputChange: (value:string) => void;
  onAddCard: () => void;
  customSelectInputChange: (value:string) => void;
  isDisabled: boolean;
}

const Form = ({
  firstname,
  lastname,
  phoneNumber,
  email,
  relation,
  firstnameInputChange,
  lastnameInputChange,
  phoneNumberInputChange,
  emailInputChange,
  onAddCard,
  customSelectInputChange,
  isDisabled
}:Props) => {
  const [isFirstnameHidden, setIsFirstnameHidden] = useState(true);
  const [isLastnameHidden, setIsLastnameHidden] = useState(true);
  const [isPhoneNumberHidden, setIsPhoneNumberHidden] = useState(true);
  const [isRelationHidden, setIsRelationHidden] = useState(true);
  const [isEmailHidden, setIsEmailHidden] = useState(true);

  function handleClick() {
    onAddCard();
    onClickHandler();
  }

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
        <Input placeHolder={"نام ..."} name={"firstname"} onChange={(e) => firstnameInputChange(e)} value={firstname}/>
        {isFirstnameHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            نام نمیتواند کمتر از ۲ کارکتر باشد </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"نام خانوادگی ..."} name={"firstname"} onChange={(e) => lastnameInputChange(e)}
               value={lastname}/>
        {isLastnameHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            نام خانوادگی نمیتواند کمتر از ۲ کارکتر باشد </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"شماره تماس ..."} name={"firstname"} onChange={(e) => phoneNumberInputChange(e)}
               value={phoneNumber}/>
        {isPhoneNumberHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            یک شماره معتبر وارد کنید</p>
        )}
      </div>
      <div className={"w-full"}>
        <CustomSelect onClick={(value) => customSelectInputChange(value)}/>
        {isRelationHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            یک نسبت انتخاب کنید </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"ایمیل ..."} name={"firstname"} onChange={(e) => emailInputChange(e)} value={email}/>
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