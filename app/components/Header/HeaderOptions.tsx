"use client"
import ArrowIcon from '../IconsTSX/ArrowIcon';
import './css/style.css';
import { ReactNode, useEffect } from "react";
import '../.././variables.css';
import Link from 'next/link';


export default function HeaderOptions(props :{close :() => void; isOpen: boolean; options :string[], optionsLinks :string[], optionsIcons :ReactNode[], title :string}){
    
    return (
        <div className="headerOptionContainer ">
            <div className="headerOptionContainerTitle"style={{display: "flex", gap: "5px"}}>

                <button className="headerOptionContainerTitleButton">{props.title}</button>
                <button className={props.isOpen?"":"rotateIcon"}>
                    <ArrowIcon width={12} height={12} color={'var(--text-white)'}></ArrowIcon>
                </button>
            </div>
            <div className={props.isOpen?" boxHeaderOption":" hideBoxHeaderOption boxHeaderOption"}>
                {
                 props.options.map((option, index) =>
            
                    <div key={index} className={"iconPlusTextHeaderOption"} style={{display: "flex", gap: "5px"}}>
                        {props.optionsIcons[index]}
                        <Link href={props.optionsLinks[index]} className='headerOptionContainerOption'>{option}</Link>

                    </div>
                 )}
            </div>
            

        </div>
    )
}