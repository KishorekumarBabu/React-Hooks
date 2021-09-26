import React, { useEffect, useState } from "react";

export default function HookCounter2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Update doc title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      Count: {count}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}
