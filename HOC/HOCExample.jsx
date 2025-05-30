// HOC
// Higher order component

// HOC
import React from "react";

function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// normal component
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Main FIle:
import React, { useState, useEffect } from "react";
import withLoading from "./withLoading";
import UserList from "./UserList";

const UserListWithLoading = withLoading(UserList);

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return <UserListWithLoading isLoading={loading} users={users} />;
}

export default App;


