
"use client"
import { useState } from 'react';
import './css/style.css';

export default function InputDropdown(props: {options :[string, string][], size :string, text:string, id :string, onChange :any}){

    return(
        <div style={{display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label">{props.text}</label>
            <select id = {props.id} className={props.size+"InputDropdown inputDropdown"} onChange={props.onChange}>

                <option value="" disabled selected>Selecione Algo</option>

                {props.options.map(option =>
                    <option className="optionDropDown" value = {option[0].toUpperCase()} key={option[1].toUpperCase()}>{option[1].toUpperCase()}</option> 
                )}
            </select>
        </div>
    );
}