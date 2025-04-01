import "../../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";
import getByParamsProperties from "@/app/apiCalls/Property/getByParamsProperties";
import changeArchivedStatusProperty from "@/app/apiCalls/Property/changeArchivedStatusProperty";
import deleteProprertyList from "@/app/apiCalls/Property/deleteByListProperty";
import deletePropertyList from "@/app/apiCalls/Property/deleteByListProperty";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";





export default async function page({searchParams}: {searchParams: {

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
    

    const inputs = [
        {name: "propertyCode", size: "medium", text: "Código", placeholder: "ex: P12334", id: "propertyCode",},
      ];
    

    const priceRanges = [
        {name: "preco",
        key: "preco",
        min: 0,
        max: 2000000,
        step: 10000, 
        id: "priceRanger"}
    ]
    
  

    return (
        <>
        
        <Title tag="h1" text="Imóveis"/>
        <SearchBar placeholder="Busca:"/>   
        <div className="containerFilterListAction">
            <Filter 
            size="medium" 
            inputs={inputs}
            inputsDropdown={[dropdownFields.propertyType, dropdownFields.purpose, dropdownFields.status]}
            inputPriceRanges={priceRanges}
            inputChooseQuantites={[]}

            />
            <TableList deleteFunction ={deletePropertyList} changeArchivedStatus = {changeArchivedStatusProperty} archived={false} context="admin" size="large" titles={["id imóvel", "preço",  "tipo imóvel", "finalidade", "status"]} 
            data={properties} totalPages={totalPages}/>
        </div>
        
        </>
    )
}



