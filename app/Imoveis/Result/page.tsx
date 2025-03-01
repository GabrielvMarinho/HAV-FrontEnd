"use client"
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
import { useSearchParams } from "next/navigation";


import { useEffect, useState } from "react";
import { stat } from "fs";

interface Property {
    id: string;
    title: string;
    price: string;
    propertyCategory: string;
    purpose: string;
}



export default function page(){
    
    const [state, setState] = useState<Property[]>([]);
    const searchParams = useSearchParams();
    const min = searchParams.get("min");
    const max = searchParams.get("max");

    // useEffect(() => {
    //     if (min && max) {
    //         fetch(`http://localhost:9090/property/${min}/${max}`)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setState(data.content ); 
    //             })
    //     }
        
    //   },[min, max]);

    
    const inputs = [
        {size: "medium", text: "Nome", placeholder: "ex: Bianca", id: "nome",},
        {size: "medium", text: "Email", placeholder: "joao@gmail.com", id: "email",},
        {size: "medium", text: "Telefone", placeholder: "ex: 672983579", id: "telefone",},
        {size: "medium", text: "CPF", placeholder: "ex: 67298357955", id: "cpf",},
      ];
    const InputDropdown = [
        {size: "medium", text: "Status", id: "status",
        options: [['sssssss', "Indisponível"], ["bia", 'Disponível'], ["bia", 'Alugado'], ["bia", 'Vendido']]}
    ] 
    const priceRanges = [
        {key: "preco",
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

            {/* <TableList size="large" titles={["id imóvel", "proprietário",  "tipo imóvel", "categoria", "status"]} 
            data={state}/> */}
        </div>
        
        </>
    )
}



