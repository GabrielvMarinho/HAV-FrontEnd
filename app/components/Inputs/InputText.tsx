"use client"
import './css/style.css';
import { useState } from "react";


export default function InputText(props: {size :string, text:string, placeholder :string, id :string, onChange :any}){
    
    return(
        <div style={{display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label">{props.text}</label>
            <input onChange={props.onChange}id={props.id} type="text" className={props.size+'Input input'} placeholder={props.placeholder}></input>
        </div>
    );
}