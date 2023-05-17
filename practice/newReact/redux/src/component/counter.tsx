import {addByValue, decrement, increment} from "../redux/actions/counter.action";
import {useDispatch, useSelector} from "react-redux";
import {counterSelected} from "../redux/reducer/counter.reducer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelected);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={ () => dispatch(addByValue(5))}>plus with five</button>
    </div>
  );
};

export default Counter;