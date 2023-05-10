interface Props {
  labelName: string,
  placeHolder: string,

}

const Input = ({labelName, placeHolder}: Props) => {
  return (
    <div>
      <div className={"flex gap-2 items-center"}>
        <span className="w-2 h-5 bg-yellow-300 rounded-sm inline-block"></span>
        <label className="block text-sm font-medium text-gray-700 text-white text-xl">
          {labelName}
        </label>
      </div>
      <div className="mt-3">
        <input
          className="focus:border-yellow-300 outline-none bg-gray-700 w-full sm:text-sm border-2 border-gray-500 rounded-md p-4"
          placeholder={placeHolder}/>
      </div>
    </div>
  );
};

export default Input;