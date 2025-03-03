"use client"
import { ReactNode, useState } from "react";
import './css/style.css';
import Button from "../Inputs/Button";

export default function Modal(props :{isOpen :boolean; id :string, onClose :() => void, onConfirm :() => void}){

    if(!props.isOpen) return null

   
    return (
        <>   
        
        <div className={"overlay"}>
            <div id={props.id} className={"modal"} >
                <h1>conteudo do modal</h1>
                <div onClick={props.onClose}><Button size="small" text="fechar"/></div>
                <div onClick={props.onConfirm}><Button size="small" text="confirmar"/></div>
            </div>
        </div>
        
    
    </>
)
    ;
}