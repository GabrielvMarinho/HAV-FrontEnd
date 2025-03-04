"use client";

import { useState } from "react";
import './css/style.css';

export default function NavBarAdm() {
    const [selectedOption, setSelectedOption] = useState("IMÓVEL");
    const options = ["CORRETOR", "USUÁRIO", "IMÓVEL"];
    return (
        <div style={{ display: "flex", flexDirection: "row", marginBottom: "var(--big-component-distance)" }}>
            {options.map((option, index) => (
                <button
                    key={option}
                    className={`boxNavBarAdm 
                        ${index === 0 ? "boxNavBarAdmLeftCorner" : ""} 
                        ${index === options.length - 1 ? "boxNavBarAdmRightCorner" : ""} 
                        ${selectedOption === option ? "selected" : ""}`}
                    onClick={() => setSelectedOption(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
