"use client"
import './css/style.css';
import { useRouter } from "next/navigation";

export default function ButtonBackAPoint(props: { point :string; size: string; text: string; hover: string, color: string; background: string }) {
    const router = useRouter();
    const handleBack = () => {
        router.back(); //volta um point sem ter que escrever a barra
    }
    const backCertainPoint = () =>{
        router.replace(props.point)
    }
    return (
        <button
            type="submit" onClick={props.point==null?handleBack:backCertainPoint}
            className={`${props.size}Button button ${props.hover}`}
            style={{ color: props.color, backgroundColor: props.background }}
        >
            {props.text.toUpperCase()}
        </button>
    );
}