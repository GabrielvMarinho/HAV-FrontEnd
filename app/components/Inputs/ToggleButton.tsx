import { useState } from "react";
import "./css/style.css"; 

export default function ToggleButton() {
  const [selected, setSelected] = useState("pf");

  return (
    <div className="toggleContainer">
      <label className={`toggleButton ${selected === "pf" ? "active" : ""}`}>
        <input
          type="radio"
          name="tipo"
          value="pf"
          checked={selected === "pf"}
          onChange={() => setSelected("pf")}
        />
      </label>
      <p style={{color: "var(--text-white"}}>Pessoa Física</p>
      <label className={`toggleButton ${selected === "pj" ? "active" : ""}`}>
        <input
          type="radio"
          name="tipo"
          value="pj"
          checked={selected === "pj"}
          onChange={() => setSelected("pj")}
        />
      </label>
      <p style={{color: "var(--text-white"}}>Pessoa jurídica</p>
    </div>
  );
}
