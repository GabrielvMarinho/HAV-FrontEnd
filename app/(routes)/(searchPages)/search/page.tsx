import getByParamsProperties from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import Filter from "@/app/components/Filters/Filter";
import ChooseQuantity from "@/app/components/Inputs/ChooseQuantity";
import SearchResult from "@/app/components/Inputs/SearchResult";
import ToggleRentOrBuy from "@/app/components/Inputs/ToggleRentOrBuy";
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
            property={true}
            inputChooseQuantites={[InputChooseQuantity.bedRoom,InputChooseQuantity.bathRoom, 
                InputChooseQuantity.garageSpace,InputChooseQuantity.suite ]}
            admin={true}
            />
            
        </>
    )
}