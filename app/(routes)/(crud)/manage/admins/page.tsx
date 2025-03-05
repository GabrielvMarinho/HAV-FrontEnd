

import { useRouter } from "next/navigation";
import ActionButtons, { ActionButton } from "@/app/components/Inputs/ActionButton";
import "../../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";




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
            data={[{
                "id":23123,
              "cpf": "123.456.789-00",
              "nome": "João Silva",
              "email": "joao@.com",
              "telefone": "123123123",
              "status": "Investidor"
            },
            {
                "id":234,

              "cpf": "987.654.321-00",
              "nome": "Maria Oliveira",
              "email": "maria@.com",
              "telefone": "123123123",
              "status": "Ativo"
            },
            {
                "id":436,
              "cpf": "456.123.789-00",
              "nome": "Carlos Santos",
              "email": "carlos@.com",
              "telefone": "234234",
              "status": "Investidor"
            }]}/>
        </div>
        
        </>
    )
}



