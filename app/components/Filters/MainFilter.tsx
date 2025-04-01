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
import ChooseQuantity from "../Inputs/ChooseQuantity";
import { InputChooseQuantity } from "../globalFormsConfig/InputChooseQuantity";
import { InputFilterConfig } from "../globalFormsConfig/InputFilterConfig";
import Filter from "../IconsTSX/Filter";

export default function MainFilter(){
    



    
   
    const [isOpen, setIsOpen] = useState(false)

    

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


    const pathname = "/search"
    
      
    
    return(
        <form action={pathname} className="filterMain">
            
            <div className="mainSection">
                <ToggleRentOrBuy selected={selected} onChange={(purpose) => setSelected(purpose)}/>
                <InputDropdown 
                    text={dropdownFields.propertyType.text}
                    name = {dropdownFields.propertyType.name}
                    options={dropdownFields.propertyType.options}
                    size={"large"}
                    id={dropdownFields.propertyType.id}
                />
                {
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
                    }
                <InputDropdown 
                    text={dropdownFields.neighborhood.text}
                    name = {dropdownFields.neighborhood.name}
                    options={dropdownFields.neighborhood.options}
                    size={"large"}
                    id={dropdownFields.neighborhood.id}
                />
                <button type="submit" className="pointer buttonBuscaClaro lightHover">
                <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
                </button>
            </div>
            {isOpen &&
                <div className="subSection">
                    <ChooseQuantity name={InputChooseQuantity.bedRoom.name}
                    text={InputChooseQuantity.bedRoom.text}
                    id={InputChooseQuantity.bedRoom.id}/>

                    <ChooseQuantity name={InputChooseQuantity.bathRoom.name}
                    text={InputChooseQuantity.bathRoom.text}
                    id={InputChooseQuantity.bathRoom.id}/>

                    <ChooseQuantity name={InputChooseQuantity.garageSpace.name}
                    text={InputChooseQuantity.garageSpace.text}
                    id={InputChooseQuantity.garageSpace.id}/>

                    <ChooseQuantity name={InputChooseQuantity.suite.name}
                    text={InputChooseQuantity.suite.text}
                    id={InputChooseQuantity.suite.id}/>
                </div>
            }
            <div className="moreFilter">
                <Filter height={25} width={25} color="var(--text-white)"/>
                <button type="button" onClick={() =>{setIsOpen(!isOpen)}}>{isOpen?"Menos Filtros":"Mais Filtros"}</button>
            </div>
            
            
        </form>
    );
}