interface Props {
  placeHolder: string
  svg: JSX.Element
}

const Input = ({placeHolder, svg}:Props) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
          {svg}
        </div>
        <input type="email" name="email" id="email"
               className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 sm:text-sm border-gray-300 rounded-sm"
               placeholder={placeHolder} />
      </div>
    </div>
  );
};

export default Input;