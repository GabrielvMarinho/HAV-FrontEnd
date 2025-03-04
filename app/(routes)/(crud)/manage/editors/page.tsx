import ActionButtons, { ActionButton } from "@/app/components/Inputs/ActionButton";
import "../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";


import { useRouter } from "next/navigation";




export default async function page(){
    
    //const properties = await fetchImoveis(); // Buscando os dados da API

    
    const inputs = [
        {name: "nome", size: "medium", text: "Nome", placeholder: "ex: Bianca", id: "nome",},
        {name: "email", size: "medium", text: "Email", placeholder: "joao@gmail.com", id: "email",},
        {name: "telefone", size: "medium", text: "Telefone", placeholder: "ex: 672983579", id: "telefone",},
        {name: "cpf", size: "medium", text: "CPF", placeholder: "ex: 67298357955", id: "cpf",},
      ];
    const inputDropdown = [
        {name: "Objetivo", size: "large", text: "Status", id: "status",
        options: [['sssssss', "Indisponível"], ["bia", 'Disponível'], ["bia", 'Alugado'], ["bia", 'Vendido']]}
    ] 
    
    return (
        <>
        
        
        
        <Title tag="h1" text="Proprietários"/>
        <NavBarAdm/>
        <SearchBar placeholder="Busca:"/>   
        <div className="containerFilterListAction">
            <Filter 
            size="medium" 
            inputs={inputs}
            inputsDropdown={inputDropdown}
            inputPriceRanges={[]}
            />
            <TableList size="large" titles={["cpf", "nome",  "email", "telefone", "status"]} 
            data={[]}/>
            <ActionButtons context="admin"/>
        </div>
        
        </>
    )
}



