import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const dropdowns = [
    { id: 1, label: "HYBRIS TWO", cardNumber: "467822XXXXXX0265" },
    { id: 2, label: "HYBRIS THREE", cardNumber: "455287XXXXXX0018" },
    { id: 3, label: "VISA", cardNumber: "478446XXXXXX5555" },
    { id: 4, label: "SOP", cardNumber: "405016XXXXXXX7733" },
  ];

  return (
    <div>
      {dropdowns.map((dropdown) => (
        <div key={dropdown.id}>
          <div>
            <span>{dropdown.label}</span>
            <span>{dropdown.cardNumber}</span>
            <button onClick={() => handleDropdownToggle(dropdown.id)}>
              ...
            </button>
          </div>
          {openDropdownId === dropdown.id && (
            <div className="dropdown-content">
              {/* Dropdown content goes here */}
              <p>{dropdown.id}</p>
              <p>Other Actions</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
