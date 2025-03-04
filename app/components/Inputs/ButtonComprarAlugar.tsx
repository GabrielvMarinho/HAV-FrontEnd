"use client"
import { useState } from "react";
import "./css/style.css";

export default function () {
    const [selected, setSelected] = useState<'um' | 'dois'>('um');
    const [content, setContent] = useState('Conteúdo do botão 1');

    const handleClick = (button: 'um' | 'dois') => {
        setSelected(button);
        setContent(button === 'um' ? 'Conteúdo do botão 1' : 'Conteúdo do botão 2');
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="containerComprarAlugar">
                <button
                    className={`buttonComprarAlugar ${selected === 'um' ? 'selected' : ''}`}
                    onClick={() => handleClick('um')}
                >
                    COMPRAR
                </button>
                <button
                    className={`buttonComprarAlugar ${selected === 'dois' ? 'selected' : ''}`}
                    onClick={() => handleClick('dois')}
                >
                    ALUGAR
                </button>

            </div>
            <div className="content">
                {content}
            </div>
        </div>
    );
}