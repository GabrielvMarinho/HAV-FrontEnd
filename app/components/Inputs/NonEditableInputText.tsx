import { UseFormRegister } from 'react-hook-form';
import './css/style.css';
import { useEffect } from 'react';


export default function NonEditableInputText(props: {name :string; size :string, text:string, value :any, id :string, register?: UseFormRegister<T>}){
    console.log(")_-----------------")
    console.log(props.value)
    
    return(
        
        <div className ={"nonEditableLabel"}style={{width: "fit-content", display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label nonEditableLabel">{props.text}</label>
            <input value={props.value} id={props.id} type="text" disabled={true} className={props.size+'Input input nonEditable'} 
                            {...(props.register ? props.register(props.name) : {})} 
                            
></input>
            
        </div>
    );
}