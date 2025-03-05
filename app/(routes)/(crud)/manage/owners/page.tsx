
import Title from "../../../../components/NonInteractable/Title";
import SearchBar from "../../../../components/Filters/SearchBar";
import TableList from "../../../../components/Information/TableList";
import Filter from "../../..//../components/Filters/Filter";
import "@/app/pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";




export default async function Page({searchParams}: {searchParams: { nome?: string; cpf?: string }}) {
  const { nome, cpf } = searchParams;

  console.log("Nome:", nome);
  console.log("CPF:", cpf);

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
            <TableList context="admin" size="large" titles={["cpf", "nome",  "email", "n. imóveis", "objetivo"]} 
            data={[
                {
                    "id": 333,
                  "cpf": "123.456.789-00",
                  "nome": "João Silva",
                  "email": "joao@.com",
                  "n. imóveis": 2,
                  "objetivo": "Investimento"
                },
                {
                    "id": 566,

                  "cpf": "987.654.321-00",
                  "nome": "Maria Oliveira",
                  "email": "maria@.com",
                  "n. imóveis": 1,
                  "objetivo": "Moradia"
                },
                {
                    "id": 769,

                  "cpf": "456.123.789-00",
                  "nome": "Carlos Santos",
                  "email": "carlos@.com",
                  "n. imóveis": 3,
                  "objetivo": "Aluguel"
                }
              ]}/>
        </div>
        
        </>
    )
}



