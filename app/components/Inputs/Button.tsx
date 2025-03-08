import './css/style.css';

export default function Button(props: {type :"button"|"submit"|"reset"; 
    size: string; text:string; hover :string; color :string, background :string; onClick?: () => void}) {

    return (
        <button 
            type={props.type}
            className={`${props.size}Button button ${props.hover}`}
            style={{color: props.color, backgroundColor: props.background }}
            onClick={props.onClick}
        >
            {props.text.toUpperCase()}
        </button>
    );
    

}