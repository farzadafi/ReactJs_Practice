import Input from "@/Component/Input";
import {Button, CustomSelect} from "@/Component";
import {useState} from "react";

const Form = () => {
  const [firstname, setFirstname] = useState('')

  const firstnameOnchangeHandler = (e:string) => {
    setFirstname(e)
  }

  const onClickHandler = () => {
    alert("naser")
  }

  return (
    <div className={"flex justify-center flex-col items-center gap-4 bg-pink-300 rounded-md mt-2 w-72 p-4 mx-auto"}>
      <p className={"text-center"}>وب اپلیکیشن مدیریت مخاطبین</p>
      <Input placeHolder={"نام ..."} name={"firstname"} onChange={ (e) => firstnameOnchangeHandler(e)} value={firstname}/>
      <Input placeHolder={"نام خانوادگی ..."} name={"firstname"} onChange={}/>
      <Input placeHolder={"شماره تماس ..."} name={"firstname"} onChange={}/>
      <CustomSelect/>
      <Input placeHolder={"ایمیل ..."} name={"firstname"}/>
      <Button onClick={onClickHandler} text={"اضافه کردن"}/>
    </div>
  );
};

export default Form;