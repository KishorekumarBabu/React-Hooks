import React, { useEffect, useState } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevState) => prevState + 1);
  };
  useEffect(() => {
    console.log("tick");
    setInterval(tick, 1000);
    return () => {
      console.log("Component unmount");
      clearInterval(tick);
    };
  }, []);

  return <div>count {count}</div>;
}
