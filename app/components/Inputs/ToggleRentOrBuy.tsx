"use client"
import { useState } from "react";
import "./css/style.css";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";

export default function ToggleRentOrBuy (props :{selected? :string, onChange? :(purpose :string)=>{}}) {

    

    return (
        <div style={{display: "flex", gap:"8px", flexDirection: "column", alignItems: "center"}}>
            <label className="toggleRentOrBuyLabel">Finalidade</label>
            <input hidden name={dropdownFields.purpose.name} value={
                props.selected=="sell"?
                dropdownFields.purpose.options[0][0]:
                dropdownFields.purpose.options[1][0]
            }/>
            <div className="containerComprarAlugar">
                <button
                type="button"
                onClick={()=>{console.log("asasd"), props.onChange("sell")}}

                    className={`buttonComprarAlugar ${props.selected === 'sell' ? 'selected' : ''}`}
                >
                    COMPRAR
                </button>
                <button
                type="button"

                onClick={()=>{console.log("asasd"), props.onChange("rent")}}
                className={`buttonComprarAlugar ${props.selected === 'rent' ? 'selected' : ''}`}
                >
                    ALUGAR
                </button>

            </div>
            
        </div>
    );
}