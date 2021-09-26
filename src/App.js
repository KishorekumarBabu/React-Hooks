import React from "react";
import "./styles.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounter2 from "./components/HookCounterTwo";
// import HookCounter3 from "./components/HookCounterThree";
// import HookCounter4 from "./components/HookCounterFour";
// import ClassCounterOne from "./components/ClassCounterOne";
// import HookCounterEffect from "./components/HookCounterEffect";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import HookIntervalCounter from "./components/HookIntervalCounter";
// import DataFetching from "./components/useEffect/DataFetching";
// import ComponentC from "./components/useContext/contextProvider/ComponentC";
// export const UserContext = React.createContext();
// export const UserContext2 = React.createContext();
// import CounterOne from "./components/useReducer/CounterOne";
// import CounterTwo from "./components/useReducer/CounterTwo";
// import CounterThree from "./components/useReducer/CounterThree";
// import ComponentA from "./components/useReducer+useContext/componentA";
// import ComponentB from "./components/useReducer+useContext/componentB";
// import ComponentC from "./components/useReducer+useContext/componentC";
// import DataFectchingOne from "./components/useState+useEffect/DataFectchingOne";
// import DataFectchingOne from "./components/useReducer+useEffect/DataFectchingOne";
// import ParentComponent from "./components/useCallback/ParentComponent";
// import Counter from "./components/useMemo/Counter";
// import FocusInput from "./components/useRef/focusInput";
// import HookTimer from "./components/useRef/HookTimer";
// import DocTitleOne from "./components/useCustomHook/DocTitleOne";
// import DocTitleTwo from "./components/useCustomHook/DocTitleTwo";
// import CounterOne from "./components/useCustomHook/CounterOne";
// import CounterTwo from "./components/useCustomHook/CounterTwo";
import UserForm from "./components/useCustomHook/userForm";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;

//     case "RESET":
//       return initialState;

//     default:
//       return state;
//   }
// };
// export const countContext = React.createContext();

export default function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <countContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterEffect /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <HookIntervalCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Kishorekumar"}>
        <UserContext2.Provider value={"Babu"}>
          <ComponentC />
        </UserContext2.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
      {/* <DataFectchingOne /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
    // </countContext.Provider>
  );
}
