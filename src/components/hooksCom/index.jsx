import { useState, useEffect } from "react";

const Hooks = (props) => {
  const [count, setCount] = useState(props.count);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  useEffect(()=>{
    setCount(props.count)
  },[props.count])



  return (
    <div>
      <h1>Hooks:</h1>
      <h1>Count:{count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};
export default Hooks;
