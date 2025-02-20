"use client"
import { useState } from "react";
import SelectedStar from "./IconsTSX/SelectedStar";
import NotSelectedStar from "./IconsTSX/NotSelectedStar";

export default function StarFavorite(props: {selected :boolean, width :number, height :number, color :string}){
    
    const [select, setSelect] = useState(props.selected);

    const toggleStar = () =>{
        setSelect(!select);
    }

    return(
        <div onClick={toggleStar}>
            {select?(
                <SelectedStar width={props.width} height={props.height} color={props.color}/>
            ):(
                <NotSelectedStar width={props.width} height={props.height} color={props.color}/>
            )}
        </div>
    );
}