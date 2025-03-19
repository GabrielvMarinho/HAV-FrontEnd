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
import ChooseQuantity from "../Inputs/ChooseQuantity";
import { InputChooseQuantity } from "../globalFormsConfig/InputChooseQuantity";

export default function Filter(props: {size :string, inputs :any[], inputsDropdown :any[], inputPriceRanges :any[] | null, inputChooseQuantites:any[] | null}){
    
    const inputPriceRanges = props.inputPriceRanges ?? [];
    const inputChooseQuantites = props.inputChooseQuantites ?? [];
    const inputsDropdown = props.inputsDropdown ?? [];
    const inputs = props.inputs ?? [];
    console.log(props.inputPriceRanges)


    
    
    const allInputs = [inputs, inputsDropdown];

    const [filterData, setFilterData] = useState(() =>
    allInputs.reduce((acc) => {
        return acc;
    }, {})
    );

    
    const [priceRange, setPriceRange] = useState({ min: inputPriceRanges?.[0]?.min ?? 0, max: inputPriceRanges?.[0]?.max });
    

    const handlePriceChange = (min: number, max: number) => {
        if(!inputPriceRanges) return 
        if(max==2000000) max = 100000000
        console.log(max)
        setPriceRange({ min, max });
    };

    const pathname = usePathname()
    
      
    
    return(
        <form action={pathname} className="filterSide">

            {inputs.map((input) => (
                input &&
                <InputText
                    name = {input.name}
                    size={"medium"}
                    placeholder={input.placeholder}
                    text={input.text}
                    id={input.id}
                />
            ))}
            {inputsDropdown.map((input) => (
                input &&
                <InputDropdown
                    name = {input.name}
                    options={input.options}
                    size={"large"}
                    text={input.text}
                    id={input.id}
                />
            ))}
            {inputChooseQuantites.map((input) =>(
                input && 
                <ChooseQuantity
                    name={input.name}
                    id ={input.id}
                    text={input.text}
                />
            ))

            }
            {inputPriceRanges.map((input) => (
                input &&
                <PriceRangeSlider
                    name = {input.name}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    id={input.id}
                    onChange={handlePriceChange}
                    
                />
            ))}
            <button type="submit" className="buttonBuscaClaro lightHover">
                <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
            </button>
        </form>
    );
}