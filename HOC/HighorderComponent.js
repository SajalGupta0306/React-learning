import React, { useState } from "react";

// component used to share functionality is called as higher order component
// takes component as an argument and returns a new component
// Counter acts as a function component
// common logic of increment is present here

// complete eg: https://www.youtube.com/watch?v=Fbrsn97jPmo

// https://codesandbox.io/s/immutable-tdd-2svylg?file=/src/HOCCounter.js

const Counter = (OriginalComponent) => {
  function HighorderComponent() {
    const [number, setNumber] = useState(0);

    const incrementCount = () => {
      setNumber((n) => n + 1);
    };
    return (
      <div>
        <OriginalComponent number={number} incrementCount={incrementCount} />
      </div>
    );
  }
  return HighorderComponent;
};

export default Counter;
