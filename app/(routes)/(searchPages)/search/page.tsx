import getByParamsProperties from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import Filter from "@/app/components/Filters/Filter";
import CardContainer from "@/app/components/Information/CardContainer";
import NoRegistration from "@/app/components/Information/NoRegistration";
import ChooseQuantity from "@/app/components/Inputs/ChooseQuantity";
import SearchResult from "@/app/components/Inputs/SearchResult";
import ToggleRentOrBuy from "@/app/components/Inputs/ToggleRentOrBuy";
import { InputChooseQuantity } from "@/app/components/globalFormsConfig/InputChooseQuantity";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";
import { textFields } from "@/app/components/globalFormsConfig/InputTextConfig";

export default async function({searchParams} :{searchParams: {
    propertyCode?: string; 
    minPrice?: number;
    maxPrice?: number;
    propertyType?: string;
    propertyStatus?: string;
    page?: number;
    bedRoom?: boolean,
    bathRoom?: boolean,
    garageSpace?: boolean,
    suite?: boolean,
    purpose?: string
}}){
    
    const params = await searchParams;
    const {propertyCode=null, minPrice=null, maxPrice=null, propertyType=null, 
       propertyStatus=null, page=0, bedRoom=null, 
      bathRoom=null, garageSpace=null, suite=null, purpose=null} = params

    const {properties, totalPages} = await getByParamsProperties(propertyCode, propertyType, propertyStatus, 
        minPrice, maxPrice, false, page, bedRoom, bathRoom, garageSpace, suite, purpose)

    console.log(properties.length)
    return (
        <>
        <SearchResult typeSearch="locacao"/>
        <div className={"cardsAndFilter"}>
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
                        InputChooseQuantity.garageSpace ]}
                    />
            {properties.length>0?
                        <CardContainer cards={properties} totalPages={totalPages}/>

            :
                        <NoRegistration/>

            }
        </div>
        </>

    )
}