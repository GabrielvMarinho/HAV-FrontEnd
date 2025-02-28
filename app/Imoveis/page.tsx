
import Title from "../components/NonInteractable/Title";
import SearchBar from "../components/Filters/SearchBar";
import TableList from "../components/Information/TableList";
import InputText from "../components/Inputs/InputText";
import Filter from "../components/Filters/Filter";
import SlideRange from "../components/Filters/SlideRange";
import InputDropdown from "../components/Inputs/InputDropdown";
import HeaderOptions from "../components/Header/HeaderOptions";
import Cellphone from "../components/IconsTSX/CellPhone";
import Link from "next/link";
import SearchIcon from "../components/IconsTSX/SearchIcon"

interface Property {
    id: string;
    title: string;
    price: string;
    property_type: string;
    purpose: string;
}

async function fetchImoveis(): Promise<Property[]> {
    const url = "http://localhost:9090/property";
    const response = await fetch(url);
    const data: Property[] = await response.json();
    console.log(data)
    // data.content.map((property: any) => {
    //     properties.push([
    //         property.id.toString(), 
    //         property.title, 
    //         property.price.toString(), 
    //         property.purpose, 
    //         property.propertyCategory
    //     ]);
        
    //     console.log(properties)
    // });

    // return properties;
    return data
}



export default async function page(){
    const properties = await fetchImoveis(); // Buscando os dados da API

    


    return (
        <>
        
        

        <Title tag="h1" text="Imóveis"/>
        <SearchBar placeholder="Busca:"/>   
        <div style={{display:"flex", width:"95%", gap: "20px"}}>
            <Filter size="medium" 
            inputs={[<InputText size="medium" text="Nome" placeholder="ex: Bianca" id="nome"/>,
            <InputText size="medium" text="Email" placeholder="joao@gmail.com" id="email"/>,
            <InputText size="medium" text="Telefone" placeholder="ex: 672983579" id="telefone"/>,
            <InputText size="medium" text="CPF" placeholder="ex: 67298357955" id="cpf"/>,
            <InputDropdown size="medium" text="Status" id="status" 
            options={[['sssssss', "Indisponível"], ["bia", 'Disponível'], ["bia", 'Alugado'], ["bia", 'Vendido']]}/>,
            <SlideRange key="preco" min={50000} max={2000000} step={10000} />
                ]} 
                search={<SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>} />

            <TableList size="large" titles={["id imóvel", "proprietário",  "tipo imóvel", "categoria", "status"]} 
            data={properties}/>
        </div>
        
        </>
    )
}



