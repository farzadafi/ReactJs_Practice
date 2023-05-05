import Header from "../header";
import {ReactNode} from "react";

interface Props {
  children : ReactNode
}

const Container = ({children}:Props) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default Container;