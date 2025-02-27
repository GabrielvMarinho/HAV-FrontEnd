"use client"
import ArrowIcon from '../IconsTSX/ArrowIcon';
import './css/style.css';
import { ReactNode, useState } from "react";
import '../.././variables.css';

export default function HeaderOptions(props :{options :string[], optionsIcons :ReactNode[], title :string}){
    const [state, setState] = useState(true);
    
    return (
        <div className="headerOptionContainer">
            <div className="headerOptionContainerTitle"style={{display: "flex", gap: "5px"}}>

                <button onClick={() => setState(!state)}>{props.title}</button>
                <div onClick={() => setState(!state)} className={state?"rotateIcon":""}>
                    <ArrowIcon width={10} height={10} color={'var(--text-white)'}></ArrowIcon>
                </div>
            </div>
            <div className="boxHeaderOption">
                {state && props.options.map((option, index) =>
            
                    <div className="iconPlusTextHeaderOption"style={{display: "flex", gap: "5px"}}>
                        {props.optionsIcons[index]}
                        <button className='headerOptionContainerOption'>{option}</button>
                    </div>
                )}
            </div>
        </div>
    )
}