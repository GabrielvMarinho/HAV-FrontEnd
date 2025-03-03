
import Title from "../../components/NonInteractable/Title";
import SearchBar from "../../components/Filters/SearchBar";
import TableList from "../../components/Information/TableList";
import InputText from "../../components/Inputs/InputText";
import Filter from "../../components/Filters/Filter";
import SlideRange from "../../components/Filters/SlideRange";
import InputDropdown from "../../components/Inputs/InputDropdown";
import HeaderOptions from "../../components/Header/HeaderOptions";
import Cellphone from "../../components/IconsTSX/CellPhone";
import Link from "next/link";
import SearchIcon from "../../components/IconsTSX/SearchIcon"
import { useRouter } from "next/navigation";

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
            <TableList size="large" titles={["id imóvel", "proprietário",  "tipo imóvel", "categoria", "status"]} 
            data={properties}/>
        </div>
        
        </>
    )
}



