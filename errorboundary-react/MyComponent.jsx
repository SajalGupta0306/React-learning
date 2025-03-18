import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function MyComponent() {
  // Simulating a JavaScript error
  throw new Error("Something went wrong in MyComponent!");
  return <div>My Component</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
