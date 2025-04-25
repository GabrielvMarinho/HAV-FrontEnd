
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
import '../../style/style.css';
import BackPage from "@/app/components/Inputs/BackPage";
import AuthGuard from "@/app/context/AuthGuard";

export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  cnpj?: string;
  name?: string;
  page?: number;


  }}) {
    const params = await searchParams;
    const {cpf=null, cnpj=null, name=null, email=null, numberProperties=null, goal=null, page=0} = params
    
    const {proprietors, totalPages} = await getByParamsProprietors(cpf, cnpj, name, email, numberProperties, goal, false, page)
  
  const inputs = [
    { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
    { name: "cnpj", size: "medium", text: "CNPJ", placeholder: "ex: ", id: "cnpj", },

    { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },

  ];
 
  const queryString = new URLSearchParams(params);

  const action = queryString.get("action")

  return (
    <AuthGuard requiredRole="ROLE_EDITOR">
      <div className="noHeaderPage">
        
        <div className="divBackandTitle">
            <BackPage/>

            <div className="titleChooseRealtor"> 
              <Title tag="h1" text="Selecionar Proprietário" />
            </div>
        </div>

        <div className="searchBarChooseRealtor">
          {/* <SearchBar placeholder="Busca:" /> */}
        </div>

        <div className="containerFilterListAction">
          <FilterToAddProperty
            size="medium"
            inputs={inputs}
            inputsDropdown={[]}
            inputPriceRanges={[]}
          />
        <TableListChoose action={action} add={true} type ={"one"}archived={false} size="large" titles={["cpf/cnpj", "nome", "email", "n. imóveis", "objetivo"]}
          data={proprietors} totalPages={totalPages} />

        </div>
      </div>
      </AuthGuard>

  )
}



