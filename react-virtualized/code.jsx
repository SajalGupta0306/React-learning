// react virtualization
// windowing

// App.tsx
import VirtualizedList from "./Components/VirtualizedList";
import "./styles.css";

const LIST = Array.from({ length: 100000 }, (_, index) => index + 1);

export default function App() {
  return (
    <VirtualizedList list={LIST} height={450} width={400} itemHeight={35} />
  );
}


// VirtualizedList.jsx
import { useState } from "react";

export default function VirtualizedList({ list, height, width, itemHeight }) {
  // setting start and end of list
  // end = total height of list / each list height
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    // tells how many list items have scrolled from top
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    // tells where to end the list
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };
  const visibleList = list.slice(indices[0], indices[1] + 1);

  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{
        height,
        width,
        background: "grey",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {/* purpose of below div is to give total height holding all the total list items */}
      <div
        style={{
          height: list.length * itemHeight,
          listStyleType: "none",
          position: "relative",
        }}
      >
{/*         this below div can be replaced ineated of adding relative/ aboslute css portion */}
{/*             <div
          style={{
            transform: `translateY(${indices[0] * itemHeight}px)`,
          }}
        > */}
        {visibleList.map((item, index) => {
          return (
            <div
              className="item"
              style={{
                height: itemHeight,
                background: "coral",
                border: "1px solid",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                padding: "10px",
                textAlign: "center",
                color: "whitesmoke",
              }}
            >
              {"Item " + item}
            </div>
          );
        })}
      </div>
{/*               </div> */}
    </div>
  );
}
