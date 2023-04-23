import React from "react";

const variants = {
  counter: "p-1 bg-red-800"
};

type buttonProps = {
  variant: string,
  classes: string,
  child?: JSX.Element,
}

const Button = ({variant, classes, child}: buttonProps) => {
  return (
    <button className={`${variants[variant]} ${classes}`}>
      {
        child
      }
    </button>
  );
};

export default Button;