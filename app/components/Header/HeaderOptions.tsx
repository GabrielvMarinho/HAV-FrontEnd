"use client"
import ArrowIcon from '../IconsTSX/ArrowIcon';
import './css/style.css';
import { ReactNode, useState } from "react";
import '../.././variables.css';
import Link from 'next/link';


export default function HeaderOptions(props :{options :string[], optionsLinks :string[], optionsIcons :ReactNode[], title :string}){
    const [state, setState] = useState(false);
    
    return (
        <div className="headerOptionContainer">
            <div className="headerOptionContainerTitle"style={{display: "flex", gap: "5px"}}>

                <button className="headerOptionContainerTitleButton"onClick={() => setState(!state)}>{props.title}</button>
                <button onClick={() => setState(!state)} className={state?"rotateIcon":""}>
                    <ArrowIcon width={12} height={12} color={'var(--text-white)'}></ArrowIcon>
                </button>
            </div>
            {state &&
            <div className="boxHeaderOption">
                {
                 props.options.map((option, index) =>
            
                    <div className="iconPlusTextHeaderOption"style={{display: "flex", gap: "5px"}}>
                        {props.optionsIcons[index]}
                        <Link href={props.optionsLinks[index]} className='headerOptionContainerOption'>{option}</Link>

                    </div>
                 )}
            </div>
            }

        </div>
    )
}