import { useDispatch } from "react-redux";
import { counter } from "../../redux/slices/counter";
import { useSelector } from "react-redux";
import selectors from "../../redux/slices/selectors";

const Counter = () => {
  const dispatcher = useDispatch();
  const increment = () => {
    dispatcher(counter.actions.increment());
  };
  const decrement = () => {
    dispatcher(counter.actions.decrement());
  };

  const count = useSelector(selectors.counter.value);

  return (
    <>
      <div>
        <h1>
          Value: <span>{count}</span>
        </h1>
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
