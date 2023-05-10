import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

const Container = ({children}: Props) => {
  return (
    <div className={"container max-w-6xl mx-auto"}>
      {children}
    </div>
  );
};

export default Container;