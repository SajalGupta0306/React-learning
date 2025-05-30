// react lazy
// react suspense
// lazy suspense

// main file:
import "./styles.css";
import React, { lazy, Suspense } from "react";

const Comp1 = lazy(async () => {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
  return import("./Comp1");
});

export default function App() {
  return (
    <div className="App">
      <h3>Another Component Data loaded</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <h3>
          <Comp1 />
        </h3>
      </Suspense>
    </div>
  );
}

// comp 1
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
