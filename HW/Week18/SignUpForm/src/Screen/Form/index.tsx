import {Button, Input} from "../../Component";
import {CheckSvg, EmailSvg, LockSvg, PeopleSvg} from "../../svg";
import {useState} from "react";

const Email = <EmailSvg/>
const People = <PeopleSvg/>
const password = <LockSvg/>
const confirmPassword = <CheckSvg/>

const Form = () => {
  const [emailValue, setEmailValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')

  const handleOnClick = () => {
    alert("email value is" + emailValue)
    alert("username value is" + usernameValue)
  }

  const onChangeHandler = (value:string) => {
    setEmailValue(value)
  }

  const onChangeUsernameHandler = (value:string) => {
    setUsernameValue(value)
  }

  return (
    <div className={"w-48 h-64 bg-[#fdecf6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4"}>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex gap-2 px-6"}>
          <Button title={"Sign In"} classes={""}/>
          <Button title={"Sign Up"} classes={"bg-purple-600 font-white"}/>
        </div>
        <Input placeHolder={"Email"} svg={Email} name={"email"} type={"email"} value={emailValue} onChange={(value) => onChangeHandler(value)}/>
        <Input placeHolder={"Username"} svg={People} name={"username"} type={"text"} onChange={(value) => onChangeUsernameHandler(value)}/>
        <Input placeHolder={"password"} svg={password} name={"password"} type={"password"}/>
        <Input placeHolder={"confirm password"} svg={confirmPassword} name={"confirmPassword"} type={"password"}/>
        <Button title={"Sign Up"} classes={"bg-purple-600 text-white"} onClick={handleOnClick}/>
      </div>
    </div>
  );
};

export default Form;