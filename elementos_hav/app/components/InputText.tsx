import './components.css';


export default function InputText(props: {size :string, text:string, placeholder :string}){
    return(
        <div style={{display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label">{props.text}</label>
            <input type="text" className={props.size+'Input input'} placeholder={props.placeholder}></input>
        </div>
    );
}