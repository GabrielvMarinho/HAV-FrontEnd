import getByParamsProperties from "@/app/apiCalls/Property/getByParamsProperties";
import Filter from "@/app/components/Filters/Filter";
import SearchBar from "@/app/components/Filters/SearchBar";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableList from "@/app/components/Information/TableList";
import Title from "@/app/components/NonInteractable/Title";
import "@/app/pageStructure.css"
import changeArchivedStatusProperty from "@/app/apiCalls/Property/changeArchivedStatusProperty";
import deletePropertyList from "@/app/apiCalls/Property/deleteByListProperty";
import AuthGuard from "@/app/context/AuthGuard";
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
      minPrice, maxPrice, true, page, bedRoom, bathRoom, garageSpace, suite, purpose)
    
      const inputs = [
          {name: "propertyCode", size: "medium", text: "Código", placeholder: "ex: P12334", id: "propertyCode",},
        ];
      const InputDropdown = [
          {
            name: "propertyType", size: "large", text: "Tipo", id: "propertyType",
          options: [['casa', "Casa"], ["terreno", 'Terreno'], ["apartamento", 'Apartamento']]
        },
  
            {name: "propertyStatus", size: "large", text: "Status", id: "propertyStatus",
          options: [["lancamento", "Lançamento"], ["Comum", 'Comum'], ["promocao", 'Promoção'], ["recente", 'Recente']]
        },
        
            {name: "propertyCategory", size: "large", text: "Finalidade", id: "propertyCategory",
          options: [["locacao", "Locação"], ["locado", 'Locado'], ["venda", 'Venda'], ["vendido", 'Vendido'],
          ["misto", 'Misto']]
      }
  
      ] 
      const priceRanges = [
          {name: "preco",
          key: "preco",
          min: 100000,
          max: 2000000,
          step: 10000, 
          id: "priceRanger"}
      ]
      
      return (
          <>
          
            <AuthGuard requiredRole="ROLE_EDITOR"> 
              <Title tag="h1" text="Imóveis Arquivados"/>
              {/* <SearchBar placeholder="Busca:"/>    */}
              <div className="containerFilterListAction">
                  <Filter 
                  size="medium" 
                  inputs={inputs}
                  inputsDropdown={[dropdownFields.propertyType, dropdownFields.status, dropdownFields.purpose]}
                  inputPriceRanges={priceRanges}
                  inputChooseQuantites={[]}

                  />
                  <TableList deleteFunction ={deletePropertyList} changeArchivedStatus = {changeArchivedStatusProperty} archived={true} context="admin" size="large" titles={["id imóvel", "preço",  "tipo imóvel", "finalidade", "status"]} 
                  data={properties} totalPages={totalPages}/>
              </div>
            </AuthGuard>
          
          </>
      )
  }
  
  
  