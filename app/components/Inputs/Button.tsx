"use client"
import './css/style.css';

export default function Button(props: {size: string; text:string; func: () => void; backgroundColor :string; color :string, hover :string}){
    return (
        <div>
            <button style={{backgroundColor: props.backgroundColor, color: props.color}} onClick={props.func} className={`${props.size}Button button ${props.hover}`}>{props.text.toUpperCase()}</button>
        </div>
    );
}