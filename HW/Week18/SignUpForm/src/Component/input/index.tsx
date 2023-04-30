interface Props {
  placeHolder: string
  svg: JSX.Element
  name: string
  type: string
}

const Input = ({placeHolder, svg, name, type}:Props) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
          {svg}
        </div>
        <input type={type} name={name}
               className="text-xs block w-full pl-5 border-gray-300 rounded-sm h-5 flex items-center justify-center"
               placeholder={placeHolder} />
      </div>
    </div>
  );
};

export default Input;