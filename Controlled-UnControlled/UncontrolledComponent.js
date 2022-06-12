import React, { createRef } from "react";

export default function UncontrolledComponent() {
  // createRef: directly access to DOM element
  // does not rerender the component
  const test = createRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(test.current.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="dummy">Dummy</label>
        <input type="text" ref={test} />
        <button>Submit</button>
      </form>
    </div>
  );
}
