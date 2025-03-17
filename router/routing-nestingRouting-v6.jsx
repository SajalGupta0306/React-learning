import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
        {/* welcome */}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="setting">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </>
  ),
  { basename: "/" }
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
