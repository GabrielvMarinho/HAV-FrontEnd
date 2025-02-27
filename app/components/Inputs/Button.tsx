import './css/style.css';

export default function Button(props: {size: string; text:string}){
    return (
        <div>
            <button className={props.size+"Button button darkHover"}>{props.text.toUpperCase()}</button>
        </div>
    );
}