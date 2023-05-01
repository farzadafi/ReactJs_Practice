import {Button, Input} from "../../Component";
import {CheckSvg, EmailSvg, LockSvg, PeopleSvg} from "../../svg";
import {useState} from "react";

const Email = <EmailSvg/>;
const People = <PeopleSvg/>;
const password = <LockSvg/>;
const confirmPassword = <CheckSvg/>;

const Form = () => {
  const [emailValue, setEmailValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [isEmailHidden, setIsEmailHidden] = useState(true);
  const [isUsernameHidden, setIsUsernameHidden] = useState(true);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  const handleOnClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailValue.match(emailRegex) ? setIsEmailHidden(true) : setIsEmailHidden(false);
    (usernameValue.length > 2) ? setIsUsernameHidden(true) : setIsUsernameHidden(false);
    (passwordValue.length > 7) ? setIsPasswordHidden(true) : setIsPasswordHidden(false);
    (confirmPasswordValue.match(passwordValue) ? setIsConfirmPasswordHidden(true) : setIsConfirmPasswordHidden(false))
  };

  const onChangeHandler = (value: string) => {
    setEmailValue(value);
  };

  const onChangeUsernameHandler = (value: string) => {
    setUsernameValue(value);
  };

  const onChangePasswordHandler = (value: string) => {
    setPasswordValue(value);
  };

  const onChangeConfirmPasswordHandler = (value: string) => {
    setConfirmPasswordValue(value);
  };

  return (
    <div
      className={"w-48 h-64 bg-[#fdecf6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4"}>
      <div className={"flex flex-col"}>
        <div className={"flex gap-2 px-6"}>
          <Button title={"Sign In"} classes={""}/>
          <Button title={"Sign Up"} classes={"bg-purple-600 font-white"}/>
        </div>
        <div>
          <Input placeHolder={"Email"} svg={Email} name={"email"} type={"email"} value={emailValue}
                 onChange={(value) => onChangeHandler(value)}/>
          {isEmailHidden ? null : (
            <p className="text-xs text-red-600 font-thin">
              please enter a valid Email </p>
          )}
        </div>
        <div>
        <Input placeHolder={"Username"} svg={People} name={"username"} type={"text"}
               onChange={(value) => onChangeUsernameHandler(value)}/>
          {isUsernameHidden ? null : (
            <p className="text-xs text-red-600 font-thin">
              must be more than 3 char </p>
          )}
        </div>
          <div>
        <Input placeHolder={"password"} svg={password} name={"password"} type={"password"}
               onChange={(value) => onChangePasswordHandler(value)}/>
            {isPasswordHidden ? null : (
              <p className="text-xs text-red-600 font-thin">
                more than 8 char </p>
            )}
          </div>
            <div>
        <Input placeHolder={"confirm password"} svg={confirmPassword} name={"confirmPassword"} type={"password"}
               onChange={(value => onChangeConfirmPasswordHandler(value))}/>
              {isConfirmPasswordHidden ? null : (
                <p className="text-xs text-red-600 font-thin">
                  password and confirm have to same </p>
              )}
            </div>
        <Button title={"Sign Up"} classes={"bg-purple-600 text-white"} onClick={handleOnClick}/>
      </div>
    </div>
  );
};

export default Form;