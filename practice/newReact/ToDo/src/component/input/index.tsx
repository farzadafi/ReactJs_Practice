interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Input = ({onChange, value}: Props) => {
  return (
    <div className={""}>
      <div className="mt-1">
        <input type="email" name="email" value={value} id="email"
               className="shadow-sm block w-full h-8 sm:text-sm border-gray-300 rounded-md p-2"
               onChange={e => onChange(e.target.value)}/>
      </div>
    </div>
  );
};

export default Input;