// useClickOutside
// custom hook
// use click outside

// useClickOutside.js
import { useEffect, useRef } from "react";
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    // Add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // Return cleanup function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]); // Re-run if ref or callback changes
};

export default useClickOutside;

// App.js
import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
