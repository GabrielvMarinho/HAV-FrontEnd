"use client"
import { useState } from "react"

export default function SelectBox(props :{dataType :string}){
    var [state, setState] = useState(false)
    return (
        <button  datatype={props.dataType} className={`selectBox ${state?"selectedBox":"notSelectedBox"}`}  onClick={() => setState(!state)}>
            
        </button>
    )
}