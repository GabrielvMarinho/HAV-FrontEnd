"use client"
import { useState } from "react";
import "./css/style.css";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";

export default function ChooseQuantity (props :{name :string, id :string, text :string}) {
    const [selected, setSelected] = useState<"" | 1 | 2| 3 | 4 | 5 >("");

    

    return (
        <div style={{display: "flex", gap:"8px", flexDirection: "column", alignItems: "left"}}>
            <label className="toggleRentOrBuyLabel">{props.text}</label>
            <input hidden name={props.name} value={selected}/>
            <div className="buttonChooseQuantity">
                <button
                type="button"
                onClick={()=>{setSelected(1)}}
                    className={` ${selected === 1 ? 'selected' : ''}`}
                >
                    1
                </button>
                <button
                type="button"
                onClick={()=>{setSelected(2)}}
                className={` ${selected === 2 ? 'selected' : ''}`}
                >
                    2
                </button>
                <button
                type="button"
                onClick={()=>{setSelected(3)}}
                    className={` ${selected === 3 ? 'selected' : ''}`}
                >
                    3
                </button>
                <button
                type="button"
                onClick={()=>{setSelected(4)}}
                    className={` ${selected === 4 ? 'selected' : ''}`}
                >
                    4
                </button>
                <button
                type="button"
                onClick={()=>{setSelected(5)}}
                    className={` ${selected === 5 ? 'selected' : ''}`}
                >
                    5+
                </button>

            </div>
            
        </div>
    );
}