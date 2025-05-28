// useMemo example
// useCallback example

import { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setUserData(data));
    console.log("inside fetch");
  }, []);

  const getLongestComment = () => {
    if (userData.length === 0) {
      return null;
    }
    let longestName = userData[0].name;
    userData.forEach((val) => {
      if (val.name.length > longestName.length) {
        longestName = val.name;
      }
    });
    console.log("inside function");
    return longestName;
  };

  const getCallBackLongestComment = useCallback(getLongestComment, [userData]);
  const memoComment = useMemo(getLongestComment, [userData]);
  return (
    <div className="App">
      <h4>Use Memo Result </h4>
      {memoComment}
      <br />
      <br />
      <h4>Use Callback Result </h4>
      <Child callChild={getCallBackLongestComment} />
      <br />
      <br />
      <button onClick={() => setIsTrue(!isTrue)}>Click Me To Toggle</button>
      <br />
      <br />
      {isTrue && <strong>Button Is Clicked</strong>}
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";

const Child = ({ callChild }) => {
  return <>{callChild()}</>;
};

export default React.memo(Child);
