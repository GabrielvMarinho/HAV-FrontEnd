"use client"

import DocumentIcon from "./components/IconsTSX/DocumentIcon"
import Button from "./components/Inputs/Button";
import Dropdown from "./components/Inputs/Dropdown";
import ArrowIcon from "./components/IconsTSX/ArrowIcon";
import InputText from "./components/Inputs/InputText"
import SelectedStar from "./components/IconsTSX/SelectedStar"
import NotSelectedStar from "./components/IconsTSX/NotSelectedStar"
import StarFavorite from "./components/Inputs/StarFavorite"
import Title from "./components/NonInteractable/Title"
import TableList from "./components/Information/TableList";
import Filter from "./components/Filters/Filter";
import InputDropdown from "./components/Inputs/InputDropdown";
import NavBarAdm from "./components/Header/NavBarAdm"
import SlideRange from "./components/Filters/SlideRange"
import SearchBarDesktop from "./components/Filters/SearchBar";
import Modal from "./components/Modal/Modal";
import SelectBox from "./components/Inputs/SelectBox";
import Link from "next/link";
import ActionButton from "./components/Inputs/ActionButton";
import Footer from "./components/Footer/Footer";
import HeaderAdm from "./components/Header/HeaderAdm";
import Cellphone from "./components/IconsTSX/CellPhone";
import HeaderOptions from "./components/Header/HeaderOptions";

export default function Home() {
  const checkSelects = function(){
    var itens = document.body.querySelectorAll("[datatype='data-select-box-table-list'].selectedBox");
    
    console.log(itens)
  }
  return (
    <>
      <HeaderAdm dropdownLinks={[
      
        <HeaderOptions optionsLinks={[
          "/imóveis",
          "/oi",
          "/thchau"
        ]}title={"Área do Admin"} optionsIcons = 
        {[<Cellphone width={15} height={15} color={"var(--text-white)"}/>,
          <Cellphone width={15} height={15} color={"var(--text-white)"}/>,
          <Cellphone width={15} height={15} color={"var(--text-white)"}/>]}
          options={["Usuários", "Imóveis"]}/>,
        
      <HeaderOptions optionsLinks={[
      "/imóveis",
      "/oi",
      ]}title={"Gestão"} optionsIcons = {[<Cellphone width={15} height={15} color={"var(--text-white)"}/>,
      <Cellphone width={15} height={15} color={"var(--text-white)"}/>
          ]}options={["Usuários", "Imóveis"]}/>

      
      ]}options={["asd", "asdas", "asddd"]}optionsLinks={["/xxx", "/asdma", "/asdasd"]}width={25.9} height={25.4} color=""/>
      <Link href="/Imoveis">clique aqui</Link>
      <SelectedStar width={54} height={54} color={"#001111"}/>
      <NotSelectedStar width={54} height={54} color={"#001111"}/>
      <DocumentIcon width={211} height={211} color={"#501010"}/>
      <Title tag="h1" text="titulo"/>
      
      </>
  )

}

