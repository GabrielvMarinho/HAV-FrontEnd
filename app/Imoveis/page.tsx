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

export default function page(){
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
            <SlideRange min={50000} max={2000000} step={10000}/>]}/>

            <TableList size="large" titles={["id imóvel", "proprietário",  "tipo imóvel", "categoria", "status"]} 
            data={[["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 
            ["34653834", "bianca isabela vaz", "casa", "locação", "promoção"], 

            ["64373274  ", "bianca isabela vaz", "casa", "locação", "promoção"]]}/>
        </div>
        
        </>
    )
}