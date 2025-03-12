import "../../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";


import getByParamsEditors from "@/app/apiCalls/Editor/getByParamsEditors";
import deleteEditorList from "@/app/apiCalls/Editor/deleteByListEditor";




export default async function page({searchParams}: {searchParams: {

  cpf?: string; 
  name?: string;
  email?: String;
  cellphone?: string;
  phoneNumber?: string;
  

  }}){
    const params = await searchParams;
    const {cpf=null, name=null, email=null, cellphone=null, phoneNumber=null} = params
        
    const data = await getByParamsEditors(cpf, name, email, cellphone, phoneNumber, false)
    //const properties = await fetchImoveis(); // Buscando os dados da API

    
    const inputs = [
      { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: ", id: "cpf", },
      { name: "name", size: "medium", text: "Nome", placeholder: "ex: ", id: "name", },
      { name: "email", size: "medium", text: "Email", placeholder: "ex: ", id: "email", },
      { name: "cellphone", size: "medium", text: "Celular", placeholder: "ex: ", id: "cellphone", },
      { name: "phoneNumber", size: "medium", text: "Telefone", placeholder: "ex: ", id: "phoneNumber", }

      ];
    
    return (
        <>
        
        
        
        <Title tag="h1" text="Editores"/>
        <NavBarAdm/>
        <SearchBar placeholder="Busca:"/>   
        <div className="containerFilterListAction">
            <Filter 
            size="medium" 
            inputs={inputs}
            inputsDropdown={[]}
            inputPriceRanges={[]}
            />
            <TableList deleteFunction={deleteEditorList} archived={false} context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "telefone"]} 
            data={data}/>
        </div>
        
        </>
    )
}



