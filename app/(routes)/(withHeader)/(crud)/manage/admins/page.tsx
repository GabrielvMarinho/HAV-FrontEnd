

import { useRouter } from "next/navigation";
import ActionButtons from "@/app/components/Inputs/ActionButton";
import "@/app/pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";
import getByParamsAdms from "@/app/apiCalls/Adm/getByParamsAdms";
import deleteByListAdm from "@/app/apiCalls/Adm/deleteByListAdm";
import changeArchivedStatusAdm from "@/app/apiCalls/Adm/changeArchivedStatusAdm";
import { textFields } from "@/app/components/globalFormsConfig/InputTextConfig";
import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import AuthGuard from "@/app/context/AuthGuard";
import { cookies } from "next/headers";


export default async function page({ searchParams }: {
  searchParams: {

    cpf?: string;
    name?: string;
    email?: String;
    cellphone?: string;
    phoneNumber?: string;
    page?: number;

  }
}) {
  const params = await searchParams;
  const { cpf = null, name = null, email = null, cellphone = null, phoneNumber = null, page = null } = params

  const { admins, totalPages } = await getByParamsAdms(cpf, name, email, cellphone, phoneNumber, false, page ?? 0)
  
  
  
    return (
        <>
          <AuthGuard requiredRole="ROLE_EDITOR"> 
              <Title tag="h1" text="Administradores"/>
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
                  />
                  <TableList changeArchivedStatus = {changeArchivedStatusAdm} deleteFunction={deleteByListAdm} type={"user"} archived={false} context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "telefone"]} 
                  data={admins} totalPages={totalPages}/>
              </div>
          </AuthGuard>
        </>
    )
}



