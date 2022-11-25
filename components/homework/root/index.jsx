import React, { useState } from "react";

function HomeworkBtn() {
  const [data, setData] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
  });
  const { count1, count2, count3, count4, count5 } = data;

  const buttons = [
    { value: count1, name: "count1" },
    { value: count2, name: "count2" },
    { value: count3, name: "count3" },
    { value: count4, name: "count4" },
    { value: count5, name: "count5" },
  ];

  const handleCount = (name, value, isDecrement = false) => {
    console.log(isDecrement);
    setData((prev) => ({
      ...prev,
      [name]: isDecrement ? value - 1 : value + 1,
    }));
  };

  return (
    <div>
      {buttons.map(({ value, name }) => (
        <>
          <button onClick={() => handleCount(name, value, true)}>-</button>
          {value}
          <button onClick={() => handleCount(name, value)}>+</button>
          <br />
          <br />
        </>
      ))}
    </div>
  );
}


export default HomeworkBtn;