import "./css/style.css"
import TapeRetangleCardImovel from "../IconsTSX/TapeRetangleCardImovel";
import TapeTopCardImovel from "../IconsTSX/TapeTopCardImovel";
import { text } from "stream/consumers";

export default function TapeCardImovel(props: {text :string}) {
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
                }}>
                <p style={{color: "var(--text-white)"}}>{props.text}</p>
            </div>
        </div>
    );
}