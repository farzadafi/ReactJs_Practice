import Header from "../header";
import {ReactNode} from "react";
import {ShopProvider} from "../../component/context/CounterContext";

interface Props {
  children: ReactNode;
}

const Container = ({children}: Props) => {
  return (
    <>
      <ShopProvider>
        <div>
          <Header/>
          {children}
        </div>
      </ShopProvider>
    </>
  );
};

export default Container;