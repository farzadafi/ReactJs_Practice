import {Button, Input, TextArea} from "@/component";
import CustomSelect from "@/component/CustomSelect";
import {ChangeEvent, useContext, useState} from "react";
import {FormContext} from "@/context/FormContext";

const FormInput = () => {
  const [formValue, setFormValue] = useState({});
  const { state, setFormData, setErrors } = useContext(FormContext);


  const inputOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value});
  };

  const textareaOnchangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value});
  };

  const selectHandler = (gonerName: string) => {
    setFormValue({...formValue, "goner": gonerName});
  };

  const onClickHandler = () => {
    console.log(formValue);
  }


  return (
    <div className={"bg-gray-700 p-14 text-white flex gap-16"}>
      <div className={"space-y-10 w-[25%]"}>
        <Input name={"filmName"} onChange={(e) => inputOnchangeHandler(e)} labelName={"نام فیلم"}
               placeHolder={"نام فیلم را وارد کنید"}/>
        <Input name={"instructorName"} onChange={(e) => inputOnchangeHandler(e)} labelName={"کارگردان"}
               placeHolder={"نام کارگردان را وارد کنید"}/>
      </div>
      <div className={"space-y-10 w-[25%]"}>
        <CustomSelect onClick={(e) => selectHandler(e)} labelName={"ژانر فیلم"}/>
        <Input onChange={(e) => inputOnchangeHandler(e)} name={"generationDate"} myType={"date"} labelName={"سال تولید"}
               placeHolder={"سال ساخت فیلم را وارد کنید"}/>
      </div>
      <div className={"space-y-10 w-[40%]"}>
        <TextArea name={"description"} onChange={(e) => textareaOnchangeHandler(e)} labelName={"توضیحات"}
                  placeHolder={"توضیحات درباره فیلم"}/>
        <div className={"flex justify-end gap-5"}>
          <Button children={"ذخیره"} variant={"saveFilm"} onClick={() => onClickHandler()} />
          <Button children={"انصراف"} variant={"cancelSave"}/>
        </div>
      </div>
    </div>
  );
};

export default FormInput;