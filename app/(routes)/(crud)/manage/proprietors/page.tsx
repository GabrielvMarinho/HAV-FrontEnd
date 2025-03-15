
import Title from "../../../../components/NonInteractable/Title";
import SearchBar from "../../../../components/Filters/SearchBar";
import TableList from "../../../../components/Information/TableList";
import Filter from "../../../../components/Filters/Filter";
import "@/app/pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import getByParamsProprietors from "@/app/apiCalls/Proprietor/getByParamsProprietors";
import deleteProprietorList from "@/app/apiCalls/Proprietor/deleteByListProprietor";
import changeArchivedStatusProprietor from "@/app/apiCalls/Proprietor/changeArchivedStatusProprietor";
import { filterFields } from "@/app/components/globalFormsConfig/InputFilterConfig";


export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  cnpj?: string; 

  name?: string;
  email?: String;
  numberProperties?: string;
  goal?: string;
  page?: number;


  }}) {
    const params = await searchParams;
    const {cpf=null, cnpj=null, name=null, email=null, numberProperties=null, goal=null, page=0} = params

    const {proprietors, totalPages} = await getByParamsProprietors(cpf, cnpj, name, email, numberProperties, goal, false, page)
    
    console.log(proprietors)
  
  const inputDropdown = [
    {
      name: "numberProperties", size: "large", text: "Número de Propriedades", id: "numberProperties",
      options: [[1, "1"], [2, '2'], [3, '3'], [4, "4"], [5, "5+"]]
    },
    {
      name: "goal", size: "large", text: "Objetivo", id: "goal",
      options: [['locacao', "Locação"], ["venda", 'Venda'], ["misto", 'Misto']]
    }
  ]

  return (
    <>

      <Title tag="h1" text="Proprietários" />
      <NavBarAdm />
      <SearchBar placeholder="Busca:" />
      <div className="containerFilterListAction">
        <Filter
          size="medium"
          inputs={
            [
              filterFields.cpf, 
              filterFields.cnpj, 
              filterFields.name, 
              filterFields.email, 
              filterFields.cellphone,
              filterFields.phoneNumber
            ]
          }
          inputsDropdown={inputDropdown}
          inputPriceRanges={[]}
        />
        <TableList changeArchivedStatus = {changeArchivedStatusProprietor} deleteFunction={deleteProprietorList} archived={false} context="admin" size="large" titles={["cpf/cnpj", "nome", "email", "n. imóveis", "objetivo"]}
          data={proprietors} totalPages={totalPages} />
      </div>

    </>
  )
}



