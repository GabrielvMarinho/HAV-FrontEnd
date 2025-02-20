"use client"
import { useState } from 'react';
import './components.css';

//the parameters represent the content and the string that will be passed to the api
export default function Dropdown(props: {options :[string, string][]}){
    const [option, setOption] = useState("");
    return(
        <div>
            <select className="dropDown" onChange={(e) => {setOption(e.target.value)}}>
                <option className="optionDropDown" value="" disabled selected>Selecione Algo</option>

                {props.options.map(option =>
                    <option className="optionDropDown" value = {option[0].toUpperCase()} key={option[1].toUpperCase()}>{option[1].toUpperCase()}</option> 
                )}
            </select>
        </div>
    );
    
}