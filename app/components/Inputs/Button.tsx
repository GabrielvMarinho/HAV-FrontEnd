import './css/style.css';

export default function Button(props: {type? :"button"|"submit"|"reset"; 
    size?: string; text?:string; hover? :string; color? :string, background? :string; 
    onClick?: () => void, border? :boolean} ) {

    return (
        <button 
            type={props.type}
            className={`${props.size}Button button pointer  ${props.hover} ${props.border?"borderLightButton":""}`}
            style={{color: props.color, backgroundColor: props.background }}
            onClick={props.onClick}
        >
            {props.text.toUpperCase()}
        </button>
    );
    

}