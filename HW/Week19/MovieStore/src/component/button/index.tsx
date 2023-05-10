import {ReactNode} from "react";

const variants: Record<string, string> = {
  saveFilm: "bg-yellow-500 rounded-md p-3 w-28",
  cancelSave: "rounded-md p-3 w-28 border border-2 border-gray-500"
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