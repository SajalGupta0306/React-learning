import React, { useState } from "react";

// component used to share functionality is called as higher order component
// takes component as an argument and returns a new component
// Counter acts as a function component
// common logic of increment is present here

//Features
// 1. We don’t modify or mutate components. We create new ones.
// 2. A HOC is used to compose components for code reuse.
// 3. A HOC is a pure function. It has no side effects, returning only a new component.

// Example
// 1. Toggling
// a. collapsing/expanding a list
// b. showing/hiding a component
// c. highlight/unhighlight a message

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
