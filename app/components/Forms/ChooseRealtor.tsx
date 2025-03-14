"use client"
import { ReactNode, useEffect } from "react";
import './css/style.css';
import Button from "../Inputs/Button";
import { Content } from "next/font/google";
import NavBarAdm from "../Header/NavBarAdm";
import SearchBar from "../Filters/SearchBar";
import Filter from "../Filters/Filter";
import TableList from "../Information/TableList";
import Title from "../NonInteractable/Title";

export default function ChooseRealtor(props: { content: ReactNode; isOpen: boolean; id: string, onClose: () => void, onConfirm: () => void }) {


    document.body.classList.remove('no-scroll');
    useEffect(() => {
        if (props.isOpen) {
          document.body.classList.add('no-scroll');
        }
      }, [props.isOpen]); 
      
      if (!props.isOpen) return null

    return (
        <>
        
        <div className={"overlay"}>
                        
        
        
        <Title tag="h1" text="Corretores"/>
        <NavBarAdm/>
        <SearchBar placeholder="Busca:"/>   
        <div className="containerFilterListAction">
            <Filter 
            size="medium" 
            inputs={inputs}
            inputsDropdown={[]}
            inputPriceRanges={[]}
            />
            <TableList changeArchivedStatus = {changeArchivedStatusRealtor} deleteFunction = {deleteRealtorList} archived={false} context="admin" size="large" titles={["cpf", "nome",  "email", "celular", "creci"]} 
            data={realtors} totalPages={totalPages}/>
        </div>
        
    
        </div>


        </>
    )
}