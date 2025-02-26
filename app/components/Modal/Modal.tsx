"use client"
import { ReactNode, useState } from "react";
import './css/style.css';
import Button from "../Inputs/Button";

export default function Modal(props:{trigger :ReactNode, id :string}){

    const [status, setStatus] = useState(false)

   
    return (
        <>   
        <div onClick={() =>setStatus(true)}>{props.trigger}</div>
        
        {status &&
        <div className={"overlay"}>
            <div id={props.id} className={"modal"} >
                <h1>conteudo do modal</h1>
                <div onClick={() =>setStatus(false)}><Button size="small" text="fechar"/></div>
                <div onClick={() =>setStatus(false)}><Button size="small" text="confirmar"/></div>

            </div>
        </div>
        }
    
    </>
)
    ;
}