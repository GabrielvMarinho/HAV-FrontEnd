import { UseFormRegister } from 'react-hook-form';
import './css/style.css';


export default function NonEditableInputText(props: {name :string; size :string, text:string, value :any, id :string, register?: UseFormRegister<T>}){
    
    return(
        
        <div className ={"nonEditableLabel"}style={{width: "fit-content", display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label nonEditableLabel">{props.text}</label>
            <input name={props.name} id={props.id} type="text" disabled={true} className={props.size+'Input input nonEditable'} 
                            {...(props.register ? props.register(props.name) : {})} 
                            value={props.value}
></input>
            
        </div>
    );
}