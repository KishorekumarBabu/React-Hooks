import React, { useContext } from "react";
import { countContext } from "../../App";

export default function ComponentF() {
  const { countDispatch: dispatch, countState: count } = useContext(
    countContext
  );
  return (
    <div>
      Component F - {count}
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
    </div>
  );
}
