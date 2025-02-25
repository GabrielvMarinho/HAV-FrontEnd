"use client"
import './css/style.css';
import Envelope from '../IconsTSX/Envelope';

export default function inputTextFooter(props: {size: string, placeholder: string, id: string}){
    return(
        <div style={{display: "flex", flexDirection: "row", backgroundColor: "var(--box-dark-red-option)", width: "209px", height: "29px", borderRadius: "5px" ,alignItems: "center", padding: "5px", gap: "11px"}} className='divInputFooter'>
            <Envelope width={20} height={20} color=''/>
            <input style={{backgroundColor: "var(--box-dark-red-option)", color: "var(--text-white)", height: "29px", padding: "0"}} id={props.id} type="text" className={props.size+'Input input'} placeholder={props.placeholder}></input>
        </div>
    );

}