import getByParamsProperties from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import Filter from "@/app/components/Filters/Filter";
import PriceRangeSlider from "@/app/components/Filters/SlideRange";
import ChooseQuantity from "@/app/components/Inputs/ChooseQuantity";
import SearchResult from "@/app/components/Inputs/SearchResult";
import { InputChooseQuantity } from "@/app/components/globalFormsConfig/InputChooseQuantity";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";
import { textFields } from "@/app/components/globalFormsConfig/InputTextConfig";

export default async function(){
    
    const data = getByParamsProperties()
    console.log(data)
    
    return (
        <>
        <SearchResult typeSearch="locacao"/>
        <Filter 
            size="medium" 
            inputs={
             []
            }
            inputsDropdown={[
                dropdownFields.propertyType,

            ]}
            inputChooseQuantites={[InputChooseQuantity.bedRoom,InputChooseQuantity.bathRoom, 
                InputChooseQuantity.garageSpace,InputChooseQuantity.suite ]}
            inputPriceRanges={[InputFilterConfig.priceRangesRent]}
            />
        </>
    )
}