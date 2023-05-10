import {YellowLabel} from "@/component";

interface Props {
  labelName: string,
  placeHolder: string,

}

const Input = ({labelName, placeHolder}: Props) => {
  return (
    <div>
      <YellowLabel labelName={labelName}/>
      <div className="mt-3">
        <input
          className="focus:border-yellow-300 outline-none bg-gray-700 w-full sm:text-sm border-2 border-gray-500 rounded-md p-4"
          placeholder={placeHolder}/>
      </div>
    </div>
  );
};

export default Input;