"use client"
import { useState } from "react";
import "./css/style.css";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";

export default function ToggleRentOrBuy () {
    const [selected, setSelected] = useState<'sell' | 'rent'>("sell");

    

    return (
        <div style={{display: "flex", gap:"8px", flexDirection: "column", alignItems: "center"}}>
            <label className="toggleRentOrBuyLabel">Finalidade</label>
            <input hidden name={dropdownFields.purpose.name} value={
                selected=="sell"?
                dropdownFields.purpose.options[0][0]:
                dropdownFields.purpose.options[1][0]
            }/>
            <div className="containerComprarAlugar">
                <button
                type="button"
                onClick={()=>{setSelected("sell")}}

                    className={`buttonComprarAlugar ${selected === 'sell' ? 'selected' : ''}`}
                >
                    COMPRAR
                </button>
                <button
                type="button"

                onClick={()=>{setSelected("rent")}}
                className={`buttonComprarAlugar ${selected === 'rent' ? 'selected' : ''}`}
                >
                    ALUGAR
                </button>

            </div>
            
        </div>
    );
}