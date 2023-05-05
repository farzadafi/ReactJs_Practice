import Input from "@/Component/Input";
import {Button, CustomSelect} from "@/Component";
import {ChangeEvent, useState} from "react";
import {User} from "@/interfaces/userInterface";

interface Props {
  setUser: (user: User) => void;
}

const Form = ({setUser}: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const [userValue, setUserValue] = useState<User>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    relation: ""
  });

  const [isFirstnameHidden, setIsFirstnameHidden] = useState(true);
  const [isLastnameHidden, setIsLastnameHidden] = useState(true);
  const [isPhoneNumberHidden, setIsPhoneNumberHidden] = useState(true);
  const [isRelationHidden, setIsRelationHidden] = useState(true);
  const [isEmailHidden, setIsEmailHidden] = useState(true);

  function enableButton() {
    if ((userValue !== undefined) && (userValue.firstname.length > 0) && (userValue.lastname.length > 0) && (userValue.phoneNumber.length > 1) && (userValue.relation.length > 0) && (userValue.email.length > 0))
      setIsDisabled(false);
  }

  function handleClick() {
    if (onClickHandler()) {
      const newUser = {
        firstname : userValue.firstname,
        lastname : userValue.lastname,
        email : userValue.email,
        phoneNumber: userValue.phoneNumber,
        relation : userValue.relation
      };
      setUser(newUser);
    }
  }

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserValue({...userValue, [name]: value});
    enableButton();
  };

  const onClickHandlerCustomSelect = (e: string) => {
    setUserValue({...userValue, ["relation"]: e});
    enableButton();
  };

  const onClickHandler = () => {
    userValue.firstname.length <= 2 ? setIsFirstnameHidden(false) : setIsFirstnameHidden(true);
    userValue.lastname.length <= 2 ? setIsLastnameHidden(false) : setIsLastnameHidden(true);
    userValue.phoneNumber.length <= 6 ? setIsPhoneNumberHidden(false) : setIsPhoneNumberHidden(true);
    userValue.relation === "" ? setIsRelationHidden(false) : setIsRelationHidden(true);
    userValue.email.length <= 6 ? setIsEmailHidden(false) : setIsEmailHidden(true);
    return ((userValue.firstname.length > 2) && (userValue.lastname.length > 2) && (userValue.phoneNumber.length > 6) && (userValue.relation !== "") && (userValue.email.length > 2));
  };

  return (
    <div className={"flex justify-center flex-col items-center gap-4 bg-pink-300 rounded-md mt-2 w-72 p-4 mx-auto"}>
      <p className={"text-center"}>وب اپلیکیشن مدیریت مخاطبین</p>
      <div className={"w-full"}>
        <Input placeHolder={"نام ..."} name={"firstname"} onChange={(e) => onchangeHandler(e)}
               value={userValue.firstname}/>
        {isFirstnameHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            نام نمیتواند کمتر از ۲ کارکتر باشد </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"نام خانوادگی ..."} name={"lastname"} onChange={(e) => onchangeHandler(e)}
               value={userValue.lastname}/>
        {isLastnameHidden ? null : (
          <p className="text-xs text-red-600 font-thin">
            نام خانوادگی نمیتواند کمتر از ۲ کارکتر باشد </p>
        )}
      </div>
      <div className={"w-full"}>
        <Input placeHolder={"شماره تماس ..."} name={"phoneNumber"} onChange={(e) => onchangeHandler(e)}
               value={userValue.phoneNumber}/>
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
        <Input placeHolder={"ایمیل ..."} name={"email"} onChange={(e) => onchangeHandler(e)} value={userValue.email}/>
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