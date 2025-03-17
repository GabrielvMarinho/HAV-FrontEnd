
import Title from "../../../../components/NonInteractable/Title";
import SearchBar from "../../../../components/Filters/SearchBar";
import TableList from "../../../../components/Information/TableList";
import Filter from "../../../../components/Filters/Filter";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import getByParamsProprietors from "@/app/apiCalls/Proprietor/getByParamsProprietors";
import deleteProprietorList from "@/app/apiCalls/Proprietor/deleteByListProprietor";
import changeArchivedStatusProprietor from "@/app/apiCalls/Proprietor/changeArchivedStatusProprietor";
import TableListChoose from "@/app/components/Information/TableListChoose";
import "@/app/pageStructure.css"
import { useParams, usePathname, useSearchParams } from "next/navigation";
import FilterToAddProperty from "@/app/components/Filters/FilterToAddProperty";
import getByParamsRealtors from "@/app/apiCalls/Realtor/getByParamsRealtors";
  
export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  creci?: string;
  page?: number;


  }}) {
    console.log("--------------------")
    const params = await searchParams;
    console.log(params)
    const {cpf=null, creci=null, email=null, numberProperties=null, goal=null, page=0} = params
    
    const {realtors, totalPages} = await getByParamsRealtors(cpf, creci, email, numberProperties, goal, false, page)
    
  
  const inputs = [
    { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
    { name: "creci", size: "medium", text: "Creci", placeholder: "ex: ", id: "creci", },

  ];

  

  const queryString = new URLSearchParams(params);

  const action = queryString.get("action")

  console.log("action realtor")
  console.log(action)
  
  return (
      <div className="noHeaderPage">

      <Title tag="h1" text="Selecionar Corretores" />
      <SearchBar placeholder="Busca:" />
      <div className="containerFilterListAction">
        <FilterToAddProperty
          size="medium"
          inputs={inputs}
          inputsDropdown={[]}
          inputPriceRanges={[]}
        />
        <TableListChoose  action={action || ""} type={"many"} archived={false} size="large" titles={["cpf", "nome", "email", "n. imóveis", "objetivo"]}
          data={realtors} totalPages={totalPages} />

      
      </div>
      </div>

  )
}



