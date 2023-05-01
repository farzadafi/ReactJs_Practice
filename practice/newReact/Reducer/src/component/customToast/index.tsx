import {useEffect} from "react";
import {toast} from "react-toastify";

interface Props {
  type : string;
  message: string;
}

const CustomToast = ({type, message}:Props) => {

  useEffect( () => {
      // @ts-ignore
    toast[type](message)
  }, [type])

  return (
    <div>
    </div>
  );
};

export default CustomToast;