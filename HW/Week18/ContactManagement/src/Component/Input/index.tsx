interface Props {
  name: string
  placeHolder: string
}

const Input = ({name, placeHolder}:Props) => {
  return (
    <div>
      <input
        type="text"
        name={name}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;