"use client"

import { ReactNode } from "react";
import SearchIcon from "../IconsTSX/SearchIcon";
import "../../variables.css"
import './css/style.css';
import InputText  from "../Inputs/InputText";
import { useState } from "react";
import InputDropdown from "../Inputs/InputDropdown";
import PriceRangeSlider from "./SlideRange";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ButtonComprarAlugar from "../Inputs/ToggleRentOrBuy";
import { dropdownFields } from "../globalFormsConfig/InputDropdownsConfig";
import ToggleRentOrBuy from "../Inputs/ToggleRentOrBuy";

export default function MainFilter(){
    



    
    
    
    
    // const [priceRange, setPriceRange] = useState({ min: props.inputPriceRanges?.[0]?.min ?? 0, max: props.inputPriceRanges?.[0]?.max });
    

    // const handlePriceChange = (min: number, max: number) => {
    //     if(!props.inputPriceRanges) return 
    //     if(max==2000000) max = 100000000
    //     console.log(max)
    //     setPriceRange({ min, max });
    // };

    const pathname = usePathname()
    
      
    
    return(
        <form action={pathname} className="filterMain filterMainShort">
            
            <div className="mainSection">
                <ToggleRentOrBuy/>
                <InputDropdown 
                    text={dropdownFields.propertyType.text}
                    name = {dropdownFields.propertyType.name}
                    options={dropdownFields.propertyType.options}
                    size={"large"}
                    id={dropdownFields.propertyType.id}
                />
                <InputDropdown 
                    text={dropdownFields.neighborhood.text}
                    name = {dropdownFields.neighborhood.name}
                    options={dropdownFields.neighborhood.options}
                    size={"large"}
                    id={dropdownFields.neighborhood.id}
                />
                <button type="submit" className="buttonBuscaClaro lightHover">
                <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
            </button>
            </div>
            
        </form>
    );
}