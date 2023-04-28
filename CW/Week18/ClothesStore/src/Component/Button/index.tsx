const variants:Record<string, string> = {
  AddToCard: "bg-yellow-500 p-4 py-2 text-sm",
  BasketCardButton: "p-2 border-slate-400 border bg-gray-300"
};

type buttonProps = {
  variant: string,
  classes?: string,
  text?: string
  onClick?: () => void;
}

const Button = ({variant, classes, text, onClick}: buttonProps) => {
  return (
    <button className={`${variants[variant]} ${classes} `} onClick={() => {
      onClick && onClick();
    }
    }>
      {
        text
      }
    </button>
  );
};

export default Button;