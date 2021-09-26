import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "DECREMENT":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "INCREMENT_SECOND":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "DECREMENT_SECOND":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export default function ComponentE() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div> First Count {count.firstCounter} </div>
      <div> Second Count {count.secondCounter} </div>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_SECOND", value: 2 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_SECOND", value: 2 })}>
        Decrement 2
      </button>
    </div>
  );
}
