import {ReactNode} from "react";

const sameClassName = 'rounded-md p-3 w-28 ';

const variants: Record<string, string> = {
  saveFilm: `${sameClassName} bg-yellow-500 hover:bg-yellow-400`,
  cancelSave: `${sameClassName} border border-2 border-gray-500 hover:bg-red-500`
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