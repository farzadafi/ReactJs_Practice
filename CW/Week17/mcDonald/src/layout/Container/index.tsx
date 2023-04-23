import React from "react";

type containerProps = {
  children: React.ReactNode
}

const Container = ({children}: containerProps) => {
  return (<div className={"container mx-auto max-w-[120rem] mt-2"}>
    <p>farzad</p>
    {children}
  </div>);
};

export default Container;