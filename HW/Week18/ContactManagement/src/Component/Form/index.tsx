import Input from "@/Component/Input";

const Form = () => {
  return (
    <div className={"flex justify-center flex-col items-center"}>
      <p className={"text-center"}>وب اپلیکیشن مدیریت مخاطبین</p>
      <Input placeHolder={"نام ..."} name={"firstname"}/>
    </div>
  );
};

export default Form;