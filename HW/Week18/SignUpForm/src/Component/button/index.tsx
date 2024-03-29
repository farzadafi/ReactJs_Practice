interface Props {
  title: string
  classes: string
  onClick?: () => void
}

const Button = ({title, classes, onClick}:Props) => {
  return (
    <button type="button"
            className={`p-1 border-transparent text-xs w-full
             rounded-sm shadow-sm hover:bg-purple-900 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 ${classes}`} onClick={onClick}>{title}
      </button>

  );
};

export default Button;