import { useState } from "react";

export default function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);
  const reset = () => setCount(initialCount);
  const increment = () => setCount((prevCount) => prevCount + value);
  const decrement = () => setCount((prevCount) => prevCount - value);

  return [count, increment, decrement, reset];
}
