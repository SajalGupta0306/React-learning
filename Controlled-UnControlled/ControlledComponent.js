import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`name is ${name}`);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dummy">Name</label>
          <input type="text" value={name} onChange={onChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
