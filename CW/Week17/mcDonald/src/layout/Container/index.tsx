import React from "react";

type containerProps = {
  children: React.ReactNode
}

const Container = ({children}: containerProps) => {
  return (<div className={"container mx-auto bg-gray-100 rounded-xl m-4"}>
    {children}
  </div>);
};

export default Container;