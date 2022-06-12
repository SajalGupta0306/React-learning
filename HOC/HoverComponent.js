import React from "react";
import Counter from "./HighorderComponent";

function HoverComponent(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <h2 onMouseOver={props.incrementCount}>Clicked {props.number} times</h2>
    </div>
  );
}

export default Counter(HoverComponent);
