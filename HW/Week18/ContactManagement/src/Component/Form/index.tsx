import Input from "@/Component/Input";
import {Button, CustomSelect} from "@/Component";

const Form = () => {
  return (
    <div className={"flex justify-center flex-col items-center gap-4 bg-pink-300 rounded-md mt-2 w-72 p-4 mx-auto"}>
      <p className={"text-center"}>وب اپلیکیشن مدیریت مخاطبین</p>
      <Input placeHolder={"نام ..."} name={"firstname"}/>
      <Input placeHolder={"نام خانوادگی ..."} name={"firstname"}/>
      <Input placeHolder={"شماره تماس ..."} name={"firstname"}/>
      <CustomSelect/>
      <Input placeHolder={"ایمیل ..."} name={"firstname"}/>
      <Button text={"اضافه کردن"}/>
    </div>
  );
};

export default Form;