"use client"

import DocumentIcon from "../../components/IconsTSX/DocumentIcon"
import SelectedStar from "../../components/IconsTSX/SelectedStar"
import NotSelectedStar from "../../components/IconsTSX/NotSelectedStar"

import Title from "../../components/NonInteractable/Title"

import Link from "next/link";
import Footer from "@/app/components/Footer/Footer"
import HeaderAdm from "../../components/Header/HeaderAdm";
import Cellphone from "../../components/IconsTSX/CellPhone";
import HeaderOptions from "../../components/Header/HeaderOptions";
import Modal from "@/app/components/Modal/Modal";
import FormTestInput from "@/app/components/Forms/FormTestInput";
import PropertyPrice from "../../components/NonInteractable/PropertyPrice";
import CardImovel from "@/app/components/Cards/CardImovel"

export default function Home() {
  
  return (
    <>
      <Link href="/Imoveis">clique aqui</Link>
      <SelectedStar width={54} height={54} color={"#001111"}/>
      <NotSelectedStar width={54} height={54} color={"#001111"}/>
      <DocumentIcon width={211} height={211} color={"#501010"}/>
      <Title tag="h1" text="titulo"/>
      <FormTestInput/>
      <PropertyPrice PromotionalPrice="R$2.000.000,00" ActualPrice="R$1.999.999,99" Taxes="R$900,00" Purpose="vendaPromocao"/>
      <CardImovel bairro="Bairro czerniewicz" cidade="Jaraguá do Sul" valor="R$200.000,00" infoParcela="" quantQuartos={2} quantBanheiros={2} quantSala={1} informationStatus="Lançamento" category="Venda"/>
      <CardImovel bairro="Amizade" cidade="Jaraguá do Sul" valor="R$1.000,00" infoParcela="/mês" quantQuartos={2} quantBanheiros={2} quantSala={2} informationStatus="Lançamento" category="Locação"/>
      <Footer/>


      </>
  )

}