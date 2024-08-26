import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const App = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div style={{ width: "20%", margin: "0px auto" }}>
        <h1 style={{ textAlign: "center" }}>useRef</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => dispatch({ type: "decrease" })}>-</button>
          <div>{state.count}</div>
          <button onClick={() => dispatch({ type: "increase" })}>+</button>
        </div>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="number"
            value={state.count > 0 ? state.count : ""}
            onChange={(e) =>
              dispatch({ type: "input", payload: Number(e.target.value) })
            }
          ></input>
        </div>
      </div>
    </>
  );
};

export default App;
