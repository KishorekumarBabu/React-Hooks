import React from "react";
import useCounter from "../customHooks/useCounter";

export default function CounterOne() {
  const initialCount = 0;
  const value = 1;
  const [count, increment, decrement, reset] = useCounter(initialCount, value);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
