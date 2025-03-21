import "../../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";
import getByParamsRealtors from "@/app/apiCalls/Realtor/getByParamsRealtors";

import deleteByListAdm from "../../../../apiCalls/Adm/deleteByListAdm"
import deleteRealtorList from "@/app/apiCalls/Realtor/deleteByListRealtor";
import changeArchivedStatusProprietor from "@/app/apiCalls/Proprietor/changeArchivedStatusProprietor";
import changeArchivedStatusRealtor from "@/app/apiCalls/Realtor/changeArchivedStatusRealtor";
import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";




export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  name?: string;
  email?: String;
  cellphone?: number;
  creci?: string;
  page?: number;


  }}){
    const params = await searchParams;
    const {cpf=null, name=null, email=null, cellphone=null, creci=null, page=0} = params
        
    const {realtors, totalPages} = await getByParamsRealtors(cpf, name, email, cellphone, creci, false, page)
        
    const inputs = [
      { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
      { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },
      { name: "email", size: "medium", text: "Email", placeholder: "ex: ", id: "email", },
      { name: "cellphone", size: "medium", text: "Celular", placeholder: "ex: ", id: "cellphone", },
      { name: "creci", size: "medium", text: "Creci", placeholder: "ex: ", id: "creci", }

      ];

    
    return (
        <>
        
        <Title tag="h1" text="Corretores"/>
        <NavBarAdm options={NavBarPath.users}/>
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
            <TableList changeArchivedStatus = {changeArchivedStatusRealtor} deleteFunction = {deleteRealtorList} archived={false} context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "creci"]} 
            data={realtors} totalPages={totalPages}/>
        </div>
        
        </>
    )
}



