interface Props {
  text: string;
  onClick: () => void;
  isDisabled: boolean
}

const Button = ({text, onClick, isDisabled}: Props) => {
  return (
    <button type="button"
            onClick={onClick}
            disabled={isDisabled}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isDisabled ? 'bg-gray-500' : 'bg-indigo-500 hover:bg-indigo-600'}`}>
      {text}</button>
  );
};

export default Button;