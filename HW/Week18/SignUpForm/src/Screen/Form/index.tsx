import {Button, Input} from "../../Component";
import {EmailSvg, PeopleSvg} from "../../svg";

const Email = <EmailSvg/>
const People = <PeopleSvg/>

const Form = () => {
  return (
    <div className={"w-48 h-52 bg-[#fdecf6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4"}>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex gap-2 px-6"}>
          <Button title={"Sign In"} classes={""}/>
          <Button title={"Sign Up"} classes={"bg-purple-600 font-white"}/>
        </div>
        <Input placeHolder={"Email"} svg={Email} name={"email"} type={"email"}/>
        <Input placeHolder={"Username"} svg={People} name={"username"} type={"text"}/>
      </div>
    </div>
  );
};

export default Form;