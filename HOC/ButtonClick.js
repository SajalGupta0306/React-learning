import React from "react";
import Counter from "./HighorderComponent";

function ButtonClick(props) {
  // eg of jSX
  const test = <h1>welcome</h1>;
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      {test}
      <button onClick={props.incrementCount}>
        Clicked {props.number} times
      </button>
    </div>
  );
}

export default Counter(ButtonClick);
