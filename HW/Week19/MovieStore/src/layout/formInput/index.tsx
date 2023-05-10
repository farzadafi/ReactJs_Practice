import {Button, Input, TextArea} from "@/component";

const FormInput = () => {
  return (
    <div className={"bg-gray-700 p-14 text-white flex gap-16"}>
      <div className={"space-y-10 w-[25%]"}>
        <Input labelName={"نام فیلم"} placeHolder={"نام فیلم را وارد کنید"}/>
        <Input labelName={"کارگردان"} placeHolder={"نام کارگردان را وارد کنید"}/>
      </div>
      <div className={"space-y-10 w-[25%]"}>
        <Input labelName={"ژانر فیلم"} placeHolder={"نام فیلم را وارد کنید"}/>
        <Input labelName={"سال تولید"} placeHolder={"سال ساخت فیلم را وارد کنید"}/>
      </div>
      <div className={"space-y-10 w-[40%]"}>
        <TextArea labelName={"توضیحات"} placeHolder={"توضیحات درباره فیلم"}/>
        <div className={"flex justify-end gap-5"}>
          <Button children={"ذخیره"} variant={"saveFilm"}/>
          <Button children={"انصراف"} variant={"cancelSave"}/>
        </div>
      </div>
    </div>
  );
};

export default FormInput;