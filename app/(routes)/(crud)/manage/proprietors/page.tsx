
import Title from "../../../../components/NonInteractable/Title";
import SearchBar from "../../../../components/Filters/SearchBar";
import TableList from "../../../../components/Information/TableList";
import Filter from "../../../../components/Filters/Filter";
import "@/app/pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import getByParamsProprietors from "@/app/apiCalls/Proprietor/getByParamsProprietors";


export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  name?: string;
  email?: String;
  numberProperties?: string;
  goal?: string;
  

  }}) {
    const params = await searchParams;
    const {cpf=null, name=null, email=null, numberProperties=null, goal=null} = params
    
    const data = await getByParamsProprietors(cpf, name, email, numberProperties, goal)
    
  
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

      <Title tag="h1" text="Proprietários" />
      <NavBarAdm />
      <SearchBar placeholder="Busca:" />
      <div className="containerFilterListAction">
        <Filter
          size="medium"
          inputs={inputs}
          inputsDropdown={inputDropdown}
          inputPriceRanges={[]}
        />
        <TableList context="admin" size="large" titles={["cpf", "nome", "email", "n. imóveis", "objetivo"]}
          data={data} />
      </div>

    </>
  )
}



