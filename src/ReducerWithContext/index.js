import React, { useReducer } from "react";
import ComponentA from "./ComponentA";

export const Context = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const NewApp = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Context.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA />
      </Context.Provider>
    </>
  );
};

export default NewApp;
