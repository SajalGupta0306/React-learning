// App.js
import React from 'react';
import { Button } from './Button';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to My App</h1>
      <div style={{ marginBottom: '10px' }}>
        <Button
          primary
          label="Primary Button"
          onClick={() => alert('Primary Button Clicked!')}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Button
          label="Secondary Button"
          onClick={() => alert('Secondary Button Clicked!')}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Button
          size="large"
          label="Large Button"
          onClick={() => alert('Large Button Clicked!')}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Button
          size="small"
          label="Small Button"
          onClick={() => alert('Small Button Clicked!')}
        />
      </div>
    </div>
  );
};

export default App;
