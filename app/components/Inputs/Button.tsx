import './css/style.css';

export default function Button(props: {size: string; text:string; hover :string; color :string, background :string}){

    return (
        <button 
            type="submit" 
            className={`${props.size}Button button ${props.hover}`}
            style={{ color: props.color, backgroundColor: props.background }}
        >
            {props.text.toUpperCase()}
        </button>
    );
    

}