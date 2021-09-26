import React, { useEffect, useState, useRef } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();
  const tick = () => {
    setCount((prevState) => prevState + 1);
  };
  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Timer {count}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}
