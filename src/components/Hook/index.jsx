import { useReducer, useState } from "react";
import { reduse } from "./reduse";

const Hook = () => {
  const [data, dispatch] = useReducer(reduse, { count: 0 });
  const [option, setOption] = useState(5);
  const onSelect = ({ target: { value } }) => {
    setOption(+value)
  };
  return (
    <div>
      <h1>UseReducer:</h1>
      <h1>Count:{data.count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "byamount", payload: option })}>
        {option}
      </button>
      <select name="" id="" onChange={onSelect}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </div>
  );
};
export default Hook;
