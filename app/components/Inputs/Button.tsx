"use client"
import './css/style.css';

export default function Button(props: {size: string; text:string; func: () => void}){
    return (
        <div>
<<<<<<< HEAD
            <button className={props.size+"Button button darkHover"}>{props.text.toUpperCase()}</button>
=======
            <button onClick={props.func} className={props.size+"Button button darkHover"}>{props.text.toUpperCase()}</button>
>>>>>>> main
        </div>
    );
}