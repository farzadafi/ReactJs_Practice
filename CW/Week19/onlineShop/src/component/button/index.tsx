import {ReactNode} from "react";

const variants: Record<string, string> = {
  shoppingCartButton: "bg-green-600 rounded-md flex items-center p-1",
  addToCard: "bg-blue-600 rounded-md p-2",
  removeFromCard: "bg-red-600 rounded-md p-2"
};

type buttonProps = {
  variant: string,
  classes?: string,
  onClick?: () => void;
  children?: ReactNode
}

const Button = ({variant, classes, onClick, children}: buttonProps) => {
  return (
    <button className={`${variants[variant]} ${classes}`} onClick={() => {
      onClick && onClick();
    }
    }>
      {
        children
      }
    </button>
  );
};

export default Button;