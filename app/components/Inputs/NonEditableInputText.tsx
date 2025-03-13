import './css/style.css';


export default function NonEditableInputText(props: {name :string; size :string, text:string, value :string, id :string}){
    
    return(
        <div style={{width: "fit-content", display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label">{props.text}</label>
            <input   name={props.name} id={props.id} type="text" disabled={true} className={props.size+'Input input'} value={props.value}></input>
        </div>
    );
}