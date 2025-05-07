// useFocus
// use Foccus
// custom hook

// useFocus.js
import { useEffect, useRef } from 'react';

const useFocus = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return ref;
};

export default useFocus;

// App.js
import React from 'react';
import useFocus from './useFocus';

const App = () => {
  const inputRef = useFocus();

  return (
    <div>
      <h2>Form with auto-focused input</h2>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="This input will auto-focus" 
      />
    </div>
  );
};

export default App;
