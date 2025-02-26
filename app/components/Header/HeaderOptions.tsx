"use client"
import ArrowIcon from '../IconsTSX/ArrowIcon';
import './css/style.css';
import { ReactNode, useState } from "react";
import '../.././variables.css';

export default function HeaderOptions(props :{options :string[], optionsIcons :ReactNode[], title :string}){
    const [state, setState] = useState(true);
    function hi(){
        console.log(state)
    }
    return (
        <div className="headerOptionContainer">
            <button onClick={() => setState(!state)}>{props.title}</button>
            <ArrowIcon width={10} height={10} color={var(--text-white)}></ArrowIcon>
            <div className="boxHeaderOption">
                {state && props.options.map(option =>
                
                    <button className='headerOptionContainerOption'>{option}</button>
                )}
            </div>
        </div>
    )
}