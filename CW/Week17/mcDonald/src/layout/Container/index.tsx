import React from "react";

type containerProps = {
  children: React.ReactNode
}

const Container = ({children}: containerProps) => {
  return (<div className={"container mx-auto max-w-xs bg-orange-400 rounded-xl"}>
    {children}
  </div>);
};

export default Container;