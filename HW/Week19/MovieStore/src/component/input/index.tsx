import {YellowLabel} from "@/component";
import {ChangeEvent} from "react";

interface Props {
  labelName: string,
  placeHolder: string,
  name: string
  myType?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({labelName, placeHolder, myType, onChange, name}: Props) => {
  return (
    <div>
      <YellowLabel labelName={labelName}/>
      <div className="mt-3">
        <input
          className={"focus:border-yellow-300 outline-none bg-gray-700 w-full sm:text-sm border-2 border-gray-500 rounded-md p-4"}
          name={name} type={myType} onChange={e => onChange ? onChange(e) : null} placeholder={placeHolder}/>
      </div>
    </div>
  );
};

export default Input;