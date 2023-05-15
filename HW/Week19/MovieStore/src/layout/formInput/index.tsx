import {Button, Input, TextArea} from "@/component";
import CustomSelect from "@/component/CustomSelect";
import {ChangeEvent, useContext, useState} from "react";
import {FormContext} from "@/context/FormContext";

const FormInput = () => {
  const [formValue, setFormValue] = useState({
    filmName: "",
    instructorName: "",
    goner: "اکشن",
    generationDate: "",
    description: ""
  });
  const {formData, errors, setErrors} = useContext(FormContext);


  const inputOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if (value.length > 1 && errors.includes(name)) {
      setErrors(errors.filter(error => error !== name));
    }
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
    const newArray = [];
    formValue.filmName.length < 1 ? newArray.push("filmName") : null;
    formValue.instructorName.length < 1 ? newArray.push("instructorName") : null;
    formValue.generationDate.length < 1 ? newArray.push("generationDate") : null;
    setErrors(newArray);
  };

  return (
    <div className={"bg-gray-700 p-14 text-white flex gap-16"}>
      <div className={"space-y-10 w-[25%]"}>
        <div>
          <Input name={"filmName"} onChange={(e) => inputOnchangeHandler(e)} labelName={"نام فیلم"}
                 placeHolder={"نام فیلم را وارد کنید"}/>
          {errors.some(item => item === "filmName") && <p className={"text-red-500"}>فیلم بدون اسم؟چیزی میزنی؟</p>}
        </div>
        <div>
          <Input name={"instructorName"} onChange={(e) => inputOnchangeHandler(e)} labelName={"کارگردان"}
                 placeHolder={"نام کارگردان را وارد کنید"}/>
          {errors.some(item => item === "instructorName") && <p className={"text-red-500"}>فیلم بدون کارگردان؟</p>}
        </div>
      </div>
      <div className={"space-y-10 w-[25%]"}>
        <CustomSelect onClick={(e) => selectHandler(e)} labelName={"ژانر فیلم"}/>
        <div>
          <Input onChange={(e) => inputOnchangeHandler(e)} name={"generationDate"} myType={"date"}
                 labelName={"سال تولید"} placeHolder={"سال ساخت فیلم را وارد کنید"}/>
          {errors.some(item => item === "generationDate") && <p className={"text-red-500"}>خیلی خری :)</p>}
        </div>
      </div>
      <div className={"space-y-10 w-[40%]"}>
        <TextArea name={"description"} onChange={(e) => textareaOnchangeHandler(e)} labelName={"توضیحات"}
                  placeHolder={"توضیحات درباره فیلم"}/>
        <div className={"flex justify-end gap-5"}>
          <Button children={"ذخیره"} variant={"saveFilm"} onClick={() => onClickHandler()}/>
          <Button children={"انصراف"} variant={"cancelSave"}/>
        </div>
      </div>
    </div>
  );
};

export default FormInput;