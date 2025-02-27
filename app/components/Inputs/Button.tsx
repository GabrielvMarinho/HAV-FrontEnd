"use client"
import './css/style.css';

export default function Button(props: {size: string; text:string; func: () => void}){
    return (
        <div>
            <button onClick={props.func} className={props.size+"Button button darkHover"}>{props.text.toUpperCase()}</button>
        </div>
    );

}