import {useDispatch, useSelector} from "react-redux";
import {addByValue, counterSelected, decrement, increment} from "../redux/slices/counter.slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelected);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={ () => dispatch(addByValue({value:5}))}>plus with five</button>
    </div>
  );
};

export default Counter;