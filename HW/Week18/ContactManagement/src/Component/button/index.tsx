interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({text, onClick}: Props) => {
  return (
    <button type="button"
            onClick={onClick}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {text}</button>
  );
};

export default Button;