import React, { useContext } from "react";
import { countContext } from "../../App";

export default function ComponentA() {
  const { countDispatch: dispatch, countState: count } = useContext(
    countContext
  );
  return (
    <div>
      Component A - {count}
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
    </div>
  );
}
