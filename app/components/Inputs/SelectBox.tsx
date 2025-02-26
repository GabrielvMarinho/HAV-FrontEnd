"use client"
import { useState } from "react"

export default function SelectBox(){
    var [state, setState] = useState(false)
    return (
        <button  className={`selectBox ${state?"selectedBox":"notSelectedBox"}`}  onClick={() => setState(!state)}>
            
        </button>
    )
}