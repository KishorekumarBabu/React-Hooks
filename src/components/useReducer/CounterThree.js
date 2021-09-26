import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export default function CounterThree() {
  const [firstCount, dispatch] = useReducer(reducer, initialState);
  const [secondCount, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div> Count {firstCount} </div>
        <button onClick={() => dispatch("RESET")}>Reset</button>
        <button onClick={() => dispatch("INCREMENT")}>Increment</button>
        <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      </div>
      <div>
        <div> Count {secondCount} </div>
        <button onClick={() => dispatchTwo("RESET")}>Reset</button>
        <button onClick={() => dispatchTwo("INCREMENT")}>Increment</button>
        <button onClick={() => dispatchTwo("DECREMENT")}>Decrement</button>
      </div>
    </div>
  );
}
