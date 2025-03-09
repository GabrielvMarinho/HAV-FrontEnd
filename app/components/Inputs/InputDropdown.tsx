
"use client"
import { useState } from 'react';
import './css/style.css';

export default function InputDropdown(props: {name :string; options :[string, string][], size :string, text:string, id :string}){

    return(
        <div style={{width: "fit-content", display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label">{props.text}</label>
            <select name={props.name} id = {props.id} className={props.size+"InputDropdown inputDropdown"}>

                <option value="" disabled selected>Selecione Algo</option>

                {props.options.map(option =>
                    <option  className="optionDropDown" value = {option[0]} key={option[1]}>{option[1].toUpperCase()}</option> 
                )}
            </select>
        </div>
    );
}