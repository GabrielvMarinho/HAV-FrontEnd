"use client"

import { ReactNode } from "react";
import SearchIcon from "../IconsTSX/SearchIcon";
import "../../variables.css"
import './css/style.css';
import InputText  from "../Inputs/InputText";
import { useState } from "react";
import InputDropdown from "../Inputs/InputDropdown";
import PriceRangeSlider from "./SlideRange";
import { useRouter, usePathname } from "next/navigation";

export default function Filter(props: {size :string, inputs :any[], inputsDropdown :any[], inputPriceRanges :any[]}){
    
    const router = useRouter();

    
    const pathname = usePathname(); // Obtém a URL atual sem os parâmetros

    
    
    const fetchUrl = function(){
        router.push(`${pathname}/Result?min=${priceRange.min}&max=${priceRange.max}`);    
    }
    
    
    
    const allInputs = [props.inputs, props.inputsDropdown];

    const [filterData, setFilterData] = useState(() =>
    allInputs.reduce((acc) => {
        return acc;
    }, {})
    );

    const [priceRange, setPriceRange] = useState({ min: props.inputPriceRanges[0].min, max: props.inputPriceRanges[0].max });

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange({ min, max });
        
    };

    const handleChange = (e) => {
        console.log(e.target.value)

        setFilterData((prev) => ({
          ...prev,
          [e.target.id]: e.target.value, // Works for all input types
        }));
        console.log(filterData)
      };
      /**
       * 
       * LÓGICA DE SET EFFECT DO RANGE SLIDER
       * 
       */
    
    return(
        <div className="filterSide">
            
            {props.inputs.map((input) => (
                input &&
                <InputText
                    size={input.size}
                    placeholder={input.placeholder}
                    text={input.text}
                    id={input.id}
                    onChange={handleChange}
                />
            ))}
            {props.inputsDropdown.map((input) => (
                input &&
                <InputDropdown
                options={input.options}
                    size={input.size}
                    text={input.text}
                    id={input.id}
                    onChange={handleChange}
                />
            ))}
            {props.inputPriceRanges.map((input) => (
                input &&
                <PriceRangeSlider
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    id={input.id}
                    onChange={handlePriceChange}
                />
            ))}
            <div onClick={fetchUrl} className="buttonBuscaClaro lightHover">
                <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
            </div>
        </div>
    );
}