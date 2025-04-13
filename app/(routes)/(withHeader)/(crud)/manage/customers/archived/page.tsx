
import getByParamsCustomers from "@/app/apiCalls/Customer/getByParamsCustomers";
import Filter from "@/app/components/Filters/Filter";
import SearchBar from "@/app/components/Filters/SearchBar";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableList from "@/app/components/Information/TableList";
import Title from "@/app/components/NonInteractable/Title";
import "@/app/pageStructure.css"
import deleteCustomerList from "@/app/apiCalls/Customer/deleteByListCustomer";
import changeArchivedStatusCustomer from "@/app/apiCalls/Customer/changeArchivedStatusCustomer";


export default async function page({searchParams}: {searchParams: {

    cpf?: string; 
    name?: string;
    email?: String;
    cellphone?: string;
    status?: string;
    page?: number;

  
    }}) {
      const params = await searchParams;
      const {cpf=null, name=null, email=null, cellphone=null, status=null, page=null} = params
      
      const {customers, totalPages} = await getByParamsCustomers(cpf, name, email, cellphone, status, true, page ?? 0)
      
      
      
  
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
  
        <Title tag="h1" text="Usuários Comuns Arquivados" />
        <SearchBar placeholder="Busca:" />
        <div className="containerFilterListAction">
          <Filter
            size="medium"
            inputs={inputs}
            inputsDropdown={inputDropdown}
            inputPriceRanges={[]}
          />
          <TableList changeArchivedStatus = {changeArchivedStatusCustomer} deleteFunction={deleteCustomerList} archived={true} context="admin" size="large" titles={["cpf", "nome", "email", "n. imóveis", "objetivo"]}
            data={customers} totalPages={totalPages}/>
        </div>
  
      </>
    )
  }
  
  
  
  