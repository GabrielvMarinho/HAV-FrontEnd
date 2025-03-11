import { useState } from "react";
import "./css/style.css"; 

export default function RadioButton(props :{onChange :(type :string) => void, selected :string}) {

  return (
    <div className="toggleContainer">
      <label className={`toggleButton ${props.selected === "pf" ? "active" : ""}`}>
        <input
          type="radio"
          value="pf"
          checked={props.selected === "pf"}
          onChange={() => props.onChange("pf")}
        />
      </label>
      <p style={{color: "var(--text-white"}}>Pessoa Física</p>
      <label className={`toggleButton ${props.selected === "pj" ? "active" : ""}`}>
        <input
          type="radio"
          value="pj"
          checked={props.selected === "pj"}
          onChange={() => props.onChange("pj")}
        />
      </label>
      <p style={{color: "var(--text-white"}}>Pessoa jurídica</p>
    </div>
  );
}
