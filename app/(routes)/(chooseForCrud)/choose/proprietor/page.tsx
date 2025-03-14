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
import { usePathname, useSearchParams } from "next/navigation";
import FilterToAddProperty from "@/app/components/Filters/FilterToAddProperty";

export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  name?: string;
  page?: number;


  }}) {
    console.log("--------------------")
    const params = await searchParams;
    console.log(params)
    const {cpf=null, name=null, email=null, numberProperties=null, goal=null, page=0} = params
    
    const {proprietors, totalPages} = await getByParamsProprietors(cpf, name, email, numberProperties, goal, false, page)
    
  
  const inputs = [
    { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
    { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },

  ];
 
  


  return (
      <div className="noHeaderPage">

      <Title tag="h1" text="Selecionar Proprietário" />
      <SearchBar placeholder="Busca:" />
      <div className="containerFilterListAction">
        <FilterToAddProperty
          size="medium"
          inputs={inputs}
          inputsDropdown={[]}
          inputPriceRanges={[]}
        />
        <TableListChoose type ={"one"}archived={false} size="large" titles={["cpf", "nome", "email", "n. imóveis", "objetivo"]}
          data={proprietors} totalPages={totalPages} />

      
      </div>
      </div>

  )
}



