import getByParamsProprietors from "@/app/apiCalls/Proprietor/getByParamsProprietors";
import Filter from "@/app/components/Filters/Filter";
import SearchBar from "@/app/components/Filters/SearchBar";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableList from "@/app/components/Information/TableList";
import Title from "@/app/components/NonInteractable/Title";
import "@/app/pageStructure.css"
import deleteProprietorList from "@/app/apiCalls/Proprietor/deleteByListProprietor";
import changeArchivedStatusProprietor from "@/app/apiCalls/Proprietor/changeArchivedStatusProprietor";

export default async function page({searchParams}: {searchParams: {

    cpf?: string; 
    name?: string;
    email?: String;
    numberProperties?: string;
    goal?: string;
    page?: number;

  
    }}) {
      const params = await searchParams;
      const {cpf=null, name=null, email=null, numberProperties=null, goal=null, page=0} = params
      
      const {proprietors, totalPages} = await getByParamsProprietors(cpf, name, email, numberProperties, goal, true, page)
      
    
    const inputs = [
      { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
      { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },
      { name: "email", size: "medium", text: "Email", placeholder: "ex: ", id: "email", }
  
    ];
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
  
        <Title tag="h1" text="Proprietários Arquivados" />
        <SearchBar placeholder="Busca:" />
        <div className="containerFilterListAction">
          <Filter
            size="medium"
            inputs={inputs}
            inputsDropdown={inputDropdown}
            inputPriceRanges={[]}
            inputChooseQuantites={[]}

          />
          <TableList changeArchivedStatus = {changeArchivedStatusProprietor} deleteFunction={deleteProprietorList} archived={true} context="admin" archived={true} size="large" titles={["cpf", "nome", "email", "n. imóveis", "objetivo"]}
            data={proprietors} totalPages={totalPages} />
        </div>
  
      </>
    )
  }
  
  
  
  