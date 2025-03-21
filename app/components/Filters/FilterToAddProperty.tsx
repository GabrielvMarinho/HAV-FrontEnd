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

export default function Filter(props: {size :string, inputs :any[], inputsDropdown :any[], inputPriceRanges :any[] | null}){
    
    


    
    
    const allInputs = [props.inputs, props.inputsDropdown];

    const [filterData, setFilterData] = useState(() =>
    allInputs.reduce((acc) => {
        return acc;
    }, {})
    );

    
    const [priceRange, setPriceRange] = useState({ min: props.inputPriceRanges?.[0]?.min ?? 0, max: props.inputPriceRanges?.[0]?.max });
    

    const handlePriceChange = (min: number, max: number) => {
        if(!props.inputPriceRanges) return 
        if(max==2000000) max = 100000000
        setPriceRange({ min, max });
    };



      
    const pathname = usePathname()
    const searchParams = useSearchParams();  
  
    const finalExistingSearchParams = Object.fromEntries(searchParams.entries());
    
    const filteredParams = Object.keys(finalExistingSearchParams).reduce((acc, key) => {
        if (key !== 'cpf' && key !== 'name' && key !== 'creci') {
            acc[key] = finalExistingSearchParams[key];
        }
        return acc;
    }, {});
    
    return(
        <form action={pathname} className="filterSide">
            {props.inputs.map((input) => (
                input &&
                <InputText
                    name = {input.name}
                    size={input.size}
                    placeholder={input.placeholder}
                    text={input.text}
                    id={input.id}
                />
            ))}
            {Object.entries(filteredParams).map(([key, value]) => (
                <input
                    hidden={true}
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                />
            ))}
            
            <button type="submit" className="buttonBuscaClaro lightHover">
                <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
            </button>
        </form>
    );
}