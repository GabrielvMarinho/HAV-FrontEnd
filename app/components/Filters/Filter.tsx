"use client"

import { ReactNode, useEffect } from "react";
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
import ToggleRentOrBuy from "../Inputs/ToggleRentOrBuy";
import { InputFilterConfig } from "../globalFormsConfig/InputFilterConfig";

export default function Filter(props: {size :string, property :boolean, inputs :any[], inputsDropdown :any[], inputChooseQuantites:any[] | null}){

    const inputChooseQuantites = props.inputChooseQuantites ?? [];
    const inputsDropdown = props.inputsDropdown ?? [];
    const inputs = props.inputs ?? [];


    
    
    const allInputs = [inputs, inputsDropdown];

    const [filterData, setFilterData] = useState(() =>
    allInputs.reduce((acc) => {
        return acc;
    }, {})
    );

    const [selected, setSelected] = useState<'sell' | 'rent'>('sell');

    

    const getPriceRange = (purpose: 'sell' | 'rent') => {
        return purpose === 'sell'
            ? { min: InputFilterConfig.priceRangesSell.min ?? 0, max: InputFilterConfig.priceRangesSell.max }
            : { min: InputFilterConfig.priceRangesRent.min ?? 0, max: InputFilterConfig.priceRangesRent.max };
    };

    const [priceRange, setPriceRange] = useState(getPriceRange(selected));

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange({ min, max });
    };
    
    
    const pathname = usePathname()
    
      
    
    return(
        <div className="divRangeSlider">
            <form action={pathname} className="filterSide">
                {props.property ?
                    <ToggleRentOrBuy selected={selected} onChange={(purpose) => setSelected(purpose)}/>:""
                }
                {inputs.map((input) => (
                    input &&
                    <InputText
                        key={input.id}
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
                        key={input.id}
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
                        key={input.id}
                        name={input.name}
                        id ={input.id}
                        text={input.text}
                    />
                ))

                }
                {props.property ?
                
                selected==="rent"? 
                
                    <PriceRangeSlider
                        name = {InputFilterConfig.priceRangesRent.name}
                        min={InputFilterConfig.priceRangesRent.min}
                        max={InputFilterConfig.priceRangesRent.max}
                        step={InputFilterConfig.priceRangesRent.step}
                        id={InputFilterConfig.priceRangesRent.id}
                        onChange={handlePriceChange}
                        
                    />
                    :
                    <PriceRangeSlider
                        name = {InputFilterConfig.priceRangesSell.name}
                        min={InputFilterConfig.priceRangesSell.min}
                        max={InputFilterConfig.priceRangesSell.max}
                        step={InputFilterConfig.priceRangesSell.step}
                        id={InputFilterConfig.priceRangesSell.id}
                        onChange={handlePriceChange}
                        
                    />
                    :""
                }
                <button type="submit" className="buttonBuscaClaro lightHover">
                    <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
                </button>
            </form> 
        </div>
    );
}