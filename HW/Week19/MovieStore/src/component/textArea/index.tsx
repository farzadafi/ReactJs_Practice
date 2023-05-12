import {YellowLabel} from "@/component";
import {ChangeEvent} from "react";

interface Props {
  labelName: string,
  placeHolder: string,
  name: string
  onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({labelName, placeHolder, onChange, name}: Props) => {
  return (
    <div>
      <YellowLabel labelName={labelName}/>
      <div className="mt-4">
        <textarea rows={4} name={name}
                  className="resize-none focus:border-yellow-300 outline-none bg-gray-700 w-full sm:text-sm border-2 border-gray-500 rounded-md p-4"
                  onChange={e => onChange ? onChange(e) : null}
                  placeholder={placeHolder}/>
      </div>
    </div>
  );
};

export default TextArea;