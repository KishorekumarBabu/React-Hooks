import React, { useMemo, useState } from "react";

export default function Counter() {
  const initialCount = 0;
  const [count1, setCount1] = useState(initialCount);
  const [count2, setCount2] = useState(initialCount);

  // Cache the result of function
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10001) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <button onClick={() => setCount1((prevCount) => prevCount + 1)}>
        Count1: {count1}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={() => setCount2((prevCount) => prevCount + 1)}>
        Count2: {count2}
      </button>
    </div>
  );
}
