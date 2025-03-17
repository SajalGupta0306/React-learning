import "./styles.css";
import React, { useRef, useState, useTransition } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const ulRef = useRef(null);
  const [list, setList] = useState([]);
  // const [list, setList] = useState([]);
  // const [isPending, startTransition] = useTransition();

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setInput(value); // High-priority update

  //   // Low-priority update (rendering a large list)
  //   startTransition(() => {
  //     const items = [];
  //     for (let i = 0; i < 20000; i++) {
  //       items.push(value);
  //     }
  //     setList(items);
  //   });
  // };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const addEntry = () => {
    const tempList = [...list];
    if (input) {
      tempList.push(input);
    }
    setList(tempList);
    setInput("");
  };

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={addEntry}>Add</button>
      </div>
      <div>
        <ul>
          {list.length > 0 &&
            list.map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
      </div>
    </>
    // <div>
    //   <h1>React Fiber: Concurrent Mode</h1>
    //   <input type="text" value={input} onChange={handleInputChange} />
    //   <p>Input: {input}</p>

    //   {isPending ? (
    //     <div>Loading list...</div>
    //   ) : (
    //     <ul>
    //       {list.map((item, index) => (
    //         <li key={index}>{item}</li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
}
