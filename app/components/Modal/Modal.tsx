"use client"
import { ReactNode, useEffect } from "react";
import './css/style.css';
import Button from "../Inputs/Button";
import { Content } from "next/font/google";

export default function Modal(props: { content: ReactNode; isOpen: boolean; id: string, onClose: () => void, onConfirm: () => void }) {
    document.body.classList.remove('no-scroll');

    if (!props.isOpen) return null

    useEffect(() => {
        if (props.isOpen) {
          document.body.classList.add('no-scroll');
        }
      }, [props.isOpen]); // Trigger effect on modal open/close

    return (
        <>

            <div className={"overlay"}>
                <div id={props.id} className={"modal"} >
                    {props.content}
                    <div style={{display: "flex", gap: "20px"}}>
                        <div onClick={props.onClose}><Button
                            size="small" text="fechar"
                            background="var(--button-color)"
                            color="var(--text-white)" hover="darkHover" /></div>
                        <div onClick={props.onConfirm}><Button size="small" text="confirmar"
                            background="var(--text-white)" color="var(--button-color)" hover="lightHover" /></div>
                    </div>
                </div>
            </div>


        </>
    )
}