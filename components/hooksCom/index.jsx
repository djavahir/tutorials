import { useState } from "react";

const Hooks = () => {
  const [data, setData] = useState({
    count: 0,
    name: "hello",
  });
  return (
    <div>
      <h1>Hooks:</h1>
      <h1>Count:{data.count}</h1>
      <button onClick={() => setData({ ...data, count: data.count + 1 })}>+</button>
      <button onClick={() => setData({ ...data, count: data.count - 1 })}>-</button>
      <br />
      <br />
      <h1>Name:{data.name}</h1>
      <input
        type="text"
        placeholder="name"
        onChange={({ target: { value } }) => setData({ ...data, name: value })}
      />
    </div>
  );
};
export default Hooks;
