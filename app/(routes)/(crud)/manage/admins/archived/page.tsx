import getByParamsAdms from "@/app/apiCalls/Adm/getByParamsAdms";
import Filter from "@/app/components/Filters/Filter";
import SearchBar from "@/app/components/Filters/SearchBar";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableList from "@/app/components/Information/TableList";
import Title from "@/app/components/NonInteractable/Title";
import "../../../../../pageStructure.css"



export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  name?: string;
  email?: String;
  cellphone?: string;
  phoneNumber?: string;
  

  }}){
    const params = await searchParams;
    const {cpf=null, name=null, email=null, cellphone=null, phoneNumber=null} = params
        
    const data = await getByParamsAdms(cpf, name, email, cellphone, phoneNumber, true)
        
    

    
    const inputs = [
      { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
      { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },
      { name: "email", size: "medium", text: "Email", placeholder: "ex: ", id: "email", },
      { name: "cellphone", size: "medium", text: "Celular", placeholder: "ex: ", id: "cellphone", },
      { name: "phoneNumber", size: "medium", text: "Telefone", placeholder: "ex: ", id: "phoneNumber", }

      ];
    
    
    return (
        <>
        
        
        
        <Title tag="h1" text="Administradores Arquivados"/>
        <SearchBar placeholder="Busca:"/>   
        <div className="containerFilterListAction">
            <Filter 
            size="medium" 
            inputs={inputs}
            inputsDropdown={[]}
            inputPriceRanges={[]}
            />
            <TableList context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "telefone"]} 
            data={data}/>
        </div>
        
        </>
    )
}



