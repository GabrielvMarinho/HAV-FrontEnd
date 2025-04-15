
import DocumentIcon from "../../../components/IconsTSX/DocumentIcon"
import SelectedStar from "../../../components/IconsTSX/SelectedStar"
import NotSelectedStar from "../../../components/IconsTSX/NotSelectedStar"

import Title from "../../../components/NonInteractable/Title"

import Link from "next/link";
import Footer from "@/app/components/Footer/Footer"
import HeaderAdm from "../../../components/Header/HeaderAdm";
import Cellphone from "../../../components/IconsTSX/CellPhone";
import HeaderOptions from "../../../components/Header/HeaderOptions";
import Modal from "@/app/components/Modal/Modal"
import CardImovel from "@/app/components/Cards/CardImovel"
// import { getServerSession } from "next-auth"
import Image from "next/image";
import "@/public/Image/css/style.css"
import MainFilter from "@/app/components/Filters/MainFilter";
import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import "@/app/GeneralPages.css"
import "@/app/variables.css"

import HavLogoDark from "@/app/components/IconsTSX/HavLogoDark";
import MainHomeInfo from "@/app/components/Information/mainHomeInfo";
import SliderContent from "@/app/components/Information/SliderContent";
import ChamadaTelefonica from "../../../components/IconsTSX/CellPhone";
import Button from "@/app/components/Inputs/Button";
import PropertyPrice from "@/app/components/NonInteractable/PropertyPrice"
import TableList from "@/app/components/Information/TableList";
import TableListChoose from "@/app/components/Information/TableListChoose";
import TableListHistory from "@/app/components/Information/TableListHistory";
import GetRandomPropertiesHighlightRandom from "@/app/apiCalls/Property/GetRandomPropertiesHighlightRandom";

export default async function Home() {

  const properties = await GetRandomPropertiesHighlightRandom()
  console.log(properties)
  return (
    <>
      <img className={"bannerHome"} src="/Image/BannerHome.png"/>
    <section className="homeMainSection">
      <div className={"bannerHomeTitle"} style={{display: "flex", alignItems: "center", marginBottom:"60px"}}>
        <h1 className="mainTitleHome">CONECTANDO VOCÊ AO SEU NOVO LAR</h1>
        <HavLogoDark height={160} width={160}/>
      </div>
      
      <MainFilter/>
    </section>
    
    <div className="bannerHomeLine"></div>
    {properties.length>0?
    <>
    <section className="homeHiglightProperties">
         
      <h3>IMÓVEIS EM</h3>
      <h2>DESTAQUE</h2>
      <SliderContent items={properties}/>   
      </section>

    </>
      :""
    }
    
  

      
      <MainHomeInfo/>
      
      

      

      <SelectedStar width={54} height={54} color={"#001111"}/>
      <NotSelectedStar width={54} height={54} color={"#001111"}/>
      <DocumentIcon width={211} height={211} color={"#501010"}/>
      <Title tag="h1" text="titulo"/>
      <Footer/>


      </>
  )

}


