
const variants = {
  counter: "p-1",
  tick: "absolute left-0 w-8 rounded-bl-md rounded-tl-md",
  pay: "p-4 text-white rounded-md mt-1"
};

type buttonProps = {
  variant: string,
  classes: string,
  child?: JSX.Element,
  onClick?: () => void;
}

const Button = ({variant, classes, child, onclickFunction}: buttonProps) => {
  return (
    <button className={`${variants[variant]} ${classes} bg-red-800`} onClick={onclickFunction}>
      {
        child
      }
    </button>
  );
};

export default Button;