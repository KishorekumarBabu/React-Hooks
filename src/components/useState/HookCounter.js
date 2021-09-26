import React, { useState } from "react";

export default function HookCounter() {
  const [count, incrementCount] = useState(0);
  return (
    <div>
      <button onClick={() => incrementCount(count + 1)}>count {count}</button>
    </div>
  );
}
