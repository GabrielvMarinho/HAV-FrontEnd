import "../../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";
import getByParamsProperties from "@/app/apiCalls/Property/getByParamsProperties";
import changeArchivedStatusProperty from "@/app/apiCalls/Property/changeArchivedStatusProperty";





export default async function page({searchParams}: {searchParams: {

  propertyCode?: string; 
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  propertyCategory?: string;
  propertyStatus?: string;
  page?: number;

  }}){
    const params = await searchParams;
    const {propertyCode=null, minPrice, maxPrice, propertyType=null, propertyCategory=null, propertyStatus=null, page=null} = params
    
    const {properties, totalPages} = await getByParamsProperties(propertyCode, propertyType, propertyCategory, propertyStatus, minPrice, maxPrice, false, page)
    

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
        
        
        
        <Title tag="h1" text="Imóveis"/>
        <SearchBar placeholder="Busca:"/>   
        <div className="containerFilterListAction">
            <Filter 
            size="medium" 
            inputs={inputs}
            inputsDropdown={InputDropdown}
            inputPriceRanges={priceRanges}
            />
            <TableList changeArchivedStatus = {changeArchivedStatusProperty} archived={false} context="admin" size="large" titles={["id imóvel", "preço",  "tipo imóvel", "finalidade", "status"]} 
            data={properties} totalPages={totalPages}/>
        </div>
        
        </>
    )
}



