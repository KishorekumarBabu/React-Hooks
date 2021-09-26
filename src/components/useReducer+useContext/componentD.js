import React, { useContext } from "react";
import { countContext } from "../../App";

export default function ComponentD() {
  const { countDispatch: dispatch, countState: count } = useContext(
    countContext
  );
  return (
    <div>
      Component D - {count}
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
    </div>
  );
}
