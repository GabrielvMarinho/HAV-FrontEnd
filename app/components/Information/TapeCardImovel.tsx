import "./css/style.css"
import TapeRetangleCardImovel from "../IconsTSX/TapeRetangleCardImovel";
import TapeTopCardImovel from "../IconsTSX/TapeTopCardImovel";
import { useState } from "react";

export default function TapeCardImovel() {
    const [condition, setCondition] = useState("Promoção");

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <TapeTopCardImovel width={12} height={12} color="" />
            <div 
                style={{
                    width: "144px",
                    height: "29px",
                    borderRadius: "4px",
                    backgroundColor: "var(--box-red-pink)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                }}
                onClick={() => setCondition(prompt("Digite a nova condição:") || condition)}
            >
                <p style={{color: "var(--text-white)"}}>{condition}</p>
            </div>
        </div>
    );
}