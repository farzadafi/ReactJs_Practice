interface Props {
  name: string;
  placeHolder: string;
  onChange: (value:string) => void
  value: string
}

const Input = ({name, placeHolder, onChange, value}: Props) => {
  return (
    <div className={"w-full"}>
      <input type="text" name={name}
             className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 sm:text-sm border border-gray-400 p-1 rounded-md"
             onChange={e => onChange ? onChange(e.target.value) : "null" }
             value={value}
             placeholder={placeHolder}/>
    </div>
  );
};

export default Input;