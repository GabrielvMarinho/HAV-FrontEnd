import ActionButtons, { ActionButton } from "@/app/components/Inputs/ActionButton";
import "../../../../pageStructure.css"
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import Title from "@/app/components/NonInteractable/Title";
import SearchBar from "@/app/components/Filters/SearchBar";
import Filter from "@/app/components/Filters/Filter";
import TableList from "@/app/components/Information/TableList";



interface Property {
    id: string;
    title: string;
    price: string;
    propertyCategory: string;
    purpose: string;
}
async function fetchImoveis(): Promise<Property[]> {
    const url = "http://localhost:9090/property";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const properties: Property[] = data.content.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        propertyCategory: item.propertyCategory,
        purpose: item.purpose

      }));
      return properties
}



export default async function page(){
    
    const properties = await fetchImoveis(); // Buscando os dados da API

    
    const inputs = [
        {name: "nome", size: "medium", text: "Nome", placeholder: "ex: Bianca", id: "nome",},
        {name: "email", size: "medium", text: "Email", placeholder: "joao@gmail.com", id: "email",},
        {name: "telefone", size: "medium", text: "Telefone", placeholder: "ex: 672983579", id: "telefone",},
        {name: "cpf", size: "medium", text: "CPF", placeholder: "ex: 67298357955", id: "cpf",},
      ];
    const InputDropdown = [
        {name: "Status", size: "medium", text: "Status", id: "status",
        options: [['sssssss', "Indisponível"], ["bia", 'Disponível'], ["bia", 'Alugado'], ["bia", 'Vendido']]}
    ] 
    const priceRanges = [
        {name: "preco",
        key: "preco",
        min: 50000,
        max: 2000000,
        step: 10000, 
        id: "priceRanger"}
    ]
    
    return (
        <>
        
        
        
        <Title tag="h1" text="Imóveis"/>
        <SearchBar placeholder="Busca:"/>   
        <div style={{display:"flex", width:"95%", gap: "20px"}}>
            <Filter 
            size="medium" 
            inputs={inputs}
            inputsDropdown={InputDropdown}
            inputPriceRanges={priceRanges}
            />
            <TableList context="admin" size="large" titles={["id imóvel", "proprietário",  "tipo imóvel", "categoria", "status"]} 
            data={[[
                {
                  "id imóvel": "333",
                  "proprietário": "João Silva",
                  "tipo imóvel": "Investimento",
                  "categoria": "Moradia",
                  "status": "Ativo"
                },
                {
                  "id imóvel": "566",
                  "proprietário": "Maria Oliveira",
                  "tipo imóvel": "Moradia",
                  "categoria": "Residencial",
                  "status": "Ativo"
                },
                {
                  "id imóvel": "769",
                  "proprietário": "Carlos Santos",
                  "tipo imóvel": "Aluguel",
                  "categoria": "Comercial",
                  "status": "Inativo"
                }
              ]
              ]}/>
        </div>
        
        </>
    )
}



