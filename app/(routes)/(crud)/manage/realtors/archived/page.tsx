import getByParamsRealtors from "@/app/apiCalls/Realtor/getByParamsRealtors";
import Filter from "@/app/components/Filters/Filter";
import SearchBar from "@/app/components/Filters/SearchBar";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableList from "@/app/components/Information/TableList";
import Title from "@/app/components/NonInteractable/Title";

export default async function page({searchParams}: {searchParams: {

    cpf?: string; 
    name?: string;
    email?: String;
    cellphone?: number;
    creci?: string;
    
  
    }}){
        const params = await searchParams;
        const {cpf=null, name=null, email=null, cellphone=null, creci=null} = params
            
        const data = await getByParamsRealtors(cpf, name, email, cellphone, creci)
            
        const inputs = [
          { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
          { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },
          { name: "email", size: "medium", text: "Email", placeholder: "ex: ", id: "email", },
          { name: "cellphone", size: "medium", text: "Celular", placeholder: "ex: ", id: "cellphone", },
          { name: "creci", size: "medium", text: "Creci", placeholder: "ex: ", id: "creci", }
    
          ];
    
        
        return (
            <>
            
            
            
            <Title tag="h1" text="Corretores Arquivados"/>
            <NavBarAdm/>
            <SearchBar placeholder="Busca:"/>   
            <div className="containerFilterListAction">
                <Filter 
                size="medium" 
                inputs={inputs}
                inputsDropdown={[]}
                inputPriceRanges={[]}
                />
                <TableList context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "creci"]} 
                data={data}/>
            </div>
            
            </>

    )
}