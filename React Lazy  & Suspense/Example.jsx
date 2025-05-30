// react lazy
// react suspense
// lazy suspense

// Main FIle:
import "./styles.css";
import React, { lazy, Suspense } from "react";
const Comp1 = lazy(() => import("./Comp1"));
const Comp2 = lazy(() => import("./Comp2"));

export default function App() {
  return (
    <div className="App">
      <h3>Another Component Data loaded</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <h3>
          <Comp1 />
        </h3>
        <Suspense fallback={<div>Waiting...</div>}>
          <h3>
            <Comp2 />
          </h3>
        </Suspense>
      </Suspense>
    </div>
  );
}

// Comp 1
import React, { useEffect, useState } from "react";

const Comp1 = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
    console.log("inside fetch");
  }, []);
  return (
    <div>
      {userData.map((user) => {
        return <div key={user.name}>{user.name}</div>;
      })}
    </div>
  );
};

export default Comp1;

// commp 2
import React from "react";

const Comp2 = () => {
  return <div>This is a lazy loaded component - Part 2</div>;
};

export default Comp2;
