import deleteRealtorList from "@/app/apiCalls/Realtor/deleteByListRealtor";
import getByParamsRealtors from "@/app/apiCalls/Realtor/getByParamsRealtors";
import Filter from "@/app/components/Filters/Filter";
import SearchBar from "@/app/components/Filters/SearchBar";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableList from "@/app/components/Information/TableList";
import Title from "@/app/components/NonInteractable/Title";
import "@/app/pageStructure.css"
import changeArchivedStatusProprietor from "@/app/apiCalls/Proprietor/changeArchivedStatusProprietor";
import changeArchivedStatusRealtor from "@/app/apiCalls/Realtor/changeArchivedStatusRealtor";
import AuthGuard from "@/app/context/AuthGuard";

export default async function page({searchParams}: {searchParams: {

    cpf?: string; 
    name?: string;
    email?: String;
    cellphone?: number;
    creci?: string;
    page?: number;

  
    }}){
        const params = await searchParams;
        const {cpf=null, name=null, email=null, cellphone=null, creci=null, page=null} = params
            
        const {realtors, totalPages} = await getByParamsRealtors(cpf, name, email, cellphone, creci, true, page)

        const inputs = [
          { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
          { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },
          { name: "email", size: "medium", text: "Email", placeholder: "ex: ", id: "email", },
          { name: "cellphone", size: "medium", text: "Celular", placeholder: "ex: ", id: "cellphone", },
          { name: "creci", size: "medium", text: "Creci", placeholder: "ex: ", id: "creci", }
    
          ];
    
        
        return (
            <>
                <AuthGuard  requiredRole="ROLE_EDITOR">
                    <Title tag="h1" text="Corretores Arquivados"/>
                    <SearchBar placeholder="Busca:"/>   
                    <div className="containerFilterListAction">
                        <Filter 
                        size="medium" 
                        inputs={inputs}
                        inputsDropdown={[]}
                        inputPriceRanges={[]}
                        inputChooseQuantites={[]}

                        />
                        <TableList changeArchivedStatus = {changeArchivedStatusRealtor}  deleteFunction = {deleteRealtorList} archived={true} context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "creci"]} 
                        data={realtors} totalPages={totalPages}/>
                    </div>
                </AuthGuard>
            </>
    )
}