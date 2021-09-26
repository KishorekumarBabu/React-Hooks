import React, { useState } from "react";
import HookMouse from "./HookMouse";

export default function HookCounter2() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay((prevCount) => !prevCount)}>
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
}
