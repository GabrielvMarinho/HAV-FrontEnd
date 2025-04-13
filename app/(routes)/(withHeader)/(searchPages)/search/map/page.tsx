import getByParamsProperties from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import Filter from "@/app/components/Filters/Filter";
import CardContainer from "@/app/components/Information/CardContainer";
import NoRegistration from "@/app/components/Information/NoRegistration";
import Button from "@/app/components/Inputs/Button";
import ChooseQuantity from "@/app/components/Inputs/ChooseQuantity";
import SearchResult from "@/app/components/Inputs/SearchResult";
import ToggleRentOrBuy from "@/app/components/Inputs/ToggleRentOrBuy";
import MapSearchResult from "@/app/components/Maps/MapSearchResult";
import { InputChooseQuantity } from "@/app/components/globalFormsConfig/InputChooseQuantity";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";
import { textFields } from "@/app/components/globalFormsConfig/InputTextConfig";

export default async function(){
    
    
    return (
        <>
        <SearchResult typeSearch="mapa"/>
        <div className={"cardsAndFilter"}>
            <MapSearchResult height="30vw" width="60vw"/>
        </div>
        </>

    )
}