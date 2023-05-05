interface Props {
  value: string
  placeHolder: string
  setInput: (value:string) => void
}

const Input = ({value, placeHolder, setInput}:Props) => {
  return (
      <input
        type="text"
        value={value}
        onChange={(e) => setInput(e.target.value)}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block p-2 sm:text-sm border-gray-300 rounded-md"
        placeholder={placeHolder}
      />
  )
};

export default Input;