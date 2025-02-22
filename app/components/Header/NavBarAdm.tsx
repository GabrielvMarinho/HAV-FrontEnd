"use client";

import { useState } from "react";
import './css/style.css';

export default function NavBarAdm() {
    const [selectedOption, setSelectedOption] = useState("CORRETOR");
    const options = ["ADMINISTRADOR", "EDITOR", "CORRETOR", "USUÁRIO", "PROPRIETÁRIO"];
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
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
