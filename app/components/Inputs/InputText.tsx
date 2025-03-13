import './css/style.css';


export default function InputText(props: {defaultValue? :string; name :string; size :string, text:string, placeholder :string, id :string}){
    
    return(
        <div style={{width: "fit-content", display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label">{props.text}</label>
            <input defaultValue ={props.defaultValue ?? ""} name={props.name} id={props.id} type="text" className={props.size+'Input input'} placeholder={props.placeholder} ></input>
        </div>
    );

}