import React, { useState, useReducer } from "react";
import "./styles.css";

const initialState = {
  fName: "",
  lName: "",
  phNumber: "",
  address: ""
};

const reducer = (state, action) => {
  console.log("sstate", state);
  switch (action.type) {
    case "submit":
      return {
        ...state,
        ...action.value
      };
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};

const App = () => {
  const [updatedState, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState({
    fName: updatedState.fName,
    lName: updatedState.lName,
    phNumber: updatedState.phNumber,
    address: updatedState.address
  });

  const handleOnChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleOnSubmit = (e) => {
    dispatch({ type: "submit", value: data });
  };

  const handleOnReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <div className="App">
        <div>
          <label>First Name:</label>
          <input
            name="fName"
            type="text"
            value={data.fName}
            onChange={handleOnChange}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            name="lName"
            type="text"
            value={data.lName}
            onChange={handleOnChange}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            name="phNumber"
            type="text"
            value={data.phNumber}
            onChange={handleOnChange}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            name="address"
            type="text"
            value={data.address}
            onChange={handleOnChange}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          />
        </div>
        <button onClick={handleOnSubmit}>Submit</button>
        <button onClick={handleOnReset}>Reset</button>
        <div>{JSON.stringify(updatedState)}</div>
      </div>
    </>
  );
};

export default App;
