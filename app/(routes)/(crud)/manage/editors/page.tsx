import "../../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";


import getByParamsEditors from "@/app/apiCalls/Editor/getByParamsEditors";
import deleteEditorList from "@/app/apiCalls/Editor/deleteByListEditor";
import changeArchivedStatusEditor from "@/app/apiCalls/Editor/changeArchivedStatusEditor";
import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";




export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  name?: string;
  email?: String;
  cellphone?: string;
  phoneNumber?: string;
  page?: number;


  }}){
    const params = await searchParams;
    const {cpf=null, name=null, email=null, cellphone=null, phoneNumber=null, page=null} = params
        
    const {editors, totalPages} = await getByParamsEditors(cpf, name, email, cellphone, phoneNumber, false, page)
    //const properties = await fetchImoveis(); // Buscando os dados da API

    
    
    return (
        <>
        <Title tag="h1" text="Editores"/>
        <NavBarAdm options={NavBarPath.users} />
        <SearchBar placeholder="Busca:"/>   
        <div className="containerFilterListAction">
            <Filter 
            size="medium" 
            inputs={
              [
                InputFilterConfig.cpf, 
                InputFilterConfig.name, 
                InputFilterConfig.email, 
                InputFilterConfig.cellphone,
                InputFilterConfig.phoneNumber
              ]
            }
            inputsDropdown={[]}
            inputPriceRanges={[]}
            inputChooseQuantites={[]}

            />
            <TableList changeArchivedStatus = {changeArchivedStatusEditor}  deleteFunction={deleteEditorList} archived={false} context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "telefone"]} 
            data={editors} totalPages={totalPages}/>
        </div>
        
        </>
    )
}



