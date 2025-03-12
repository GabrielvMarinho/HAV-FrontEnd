
import Title from "../../../../components/NonInteractable/Title";
import SearchBar from "../../../../components/Filters/SearchBar";
import TableList from "../../../../components/Information/TableList";
import Filter from "../../..//../components/Filters/Filter";
import "@/app/pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import ActionButton from "@/app/components/Inputs/ActionButton";
import Trashcan from "@/app/components/IconsTSX/Trashcan";
import getByParamsCustomers from "@/app/apiCalls/Customer/getByParamsCustomers";
import deleteCustomerList from "@/app/apiCalls/Customer/deleteByListCustomer";





export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  name?: string;
  email?: String;
  cellphone?: string;
  status?: string;
  

  }}) {
    const params = await searchParams;
    const {cpf=null, name=null, email=null, cellphone=null, status=null} = params
    
    const data = await getByParamsCustomers(cpf, name, email, cellphone, status, false)
    
    
    

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

      <Title tag="h1" text="Usuários Comuns" />
      <NavBarAdm />
      <SearchBar placeholder="Busca:" />
      <div className="containerFilterListAction">
        <Filter
          size="medium"
          inputs={inputs}
          inputsDropdown={inputDropdown}
          inputPriceRanges={[]}
        />
        <TableList deleteFunction={deleteCustomerList} archived={false} context="admin" size="large" titles={["cpf", "nome", "email", "n. imóveis", "objetivo"]}
          data={data} />
      </div>

    </>
  )
}



