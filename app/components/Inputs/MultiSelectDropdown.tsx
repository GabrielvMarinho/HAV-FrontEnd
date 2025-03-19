"use client"
import { useState } from "react";

const options: string[] = ["Apple", "Banana", "Cherry", "Orange"];

const MultiSelectDropdown: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <details style={{ display: "inline-block", position: "relative" }}>
      <summary
        style={{
          cursor: "pointer",
          padding: "10px",
          border: "1px solid #ccc",
          background: "#fff",
          borderRadius: "5px",
          listStyle: "none",
          userSelect: "none",
        }}
      >
        Selecione Algo
      </summary>
      <div
        style={{
          position: "absolute",
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "8px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          zIndex: 10,
          width: "150px",
        }}
      >
        {options.map((option) => (
          <label key={option} style={{ display: "block", padding: "5px" }}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />{" "}
            {option}
          </label>
        ))}
      </div>
    </details>
  );
};

export default MultiSelectDropdown;
