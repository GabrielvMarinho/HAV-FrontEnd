
import DocumentIcon from "../../components/IconsTSX/DocumentIcon"
import SelectedStar from "../../components/IconsTSX/SelectedStar"
import NotSelectedStar from "../../components/IconsTSX/NotSelectedStar"

import Title from "../../components/NonInteractable/Title"

import Link from "next/link";
import Footer from "@/app/components/Footer/Footer"
import HeaderAdm from "../../components/Header/HeaderAdm";
import Cellphone from "../../components/IconsTSX/CellPhone";
import HeaderOptions from "../../components/Header/HeaderOptions";
import Modal from "@/app/components/Modal/Modal"
import FormTestInput from "@/app/components/Forms/FormTestInput"
import CardImovel from "@/app/components/Cards/CardImovel"
// import { getServerSession } from "next-auth"
import Image from "next/image";
import "@/public/Image/css/style.css"
import MainFilter from "@/app/components/Filters/MainFilter";
import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import "../../GeneralPages.css"
import HavLogoDark from "@/app/components/IconsTSX/HavLogoDark";
import MainHomeInfo from "@/app/components/Information/mainHomeInfo";

export default function Home() {

  // const session = getServerSession()
  
  // console.log(session)

  return (
    <>
      <img className={"bannerHome"} src="/Image/BannerHome.png"/>

      {/* <div style={{display: "flex", alignItems: "center", marginBottom:"60px"}}>
        <h1 className="mainTitleHome">CONECTANDO VOCÊ AO SEU NOVO LAR</h1>
        <HavLogoDark height={150} width={150}/>
      </div>

      <div className="bannerHomeLine"></div>
      <MainFilter/> */}

    <CardImovel 
        bairro="Barra do rio molha" 
        cidade="Jaraguá do Sul" 
        valor="2000000" 
        sell={true} 
        quantQuartos={2} 
        quantSala={3} 
        quantBanheiros={5} 
        informationStatus="string" 
        category="string" 
      />

      <CardImovel 
        bairro="Barra do rio molha" 
        cidade="Jaraguá do Sul" 
        valor="20" 
        sell={false} 
        quantQuartos={2} 
        quantSala={3} 
        quantBanheiros={5} 
        informationStatus="LANÇAMENTO" 
        category="VENDA" 
      />

      
      <MainHomeInfo/>
      
      
      <Link href="/Imoveis">clique aqui</Link>
      <SelectedStar width={54} height={54} color={"#001111"}/>
      <NotSelectedStar width={54} height={54} color={"#001111"}/>
      <DocumentIcon width={211} height={211} color={"#501010"}/>
      <Title tag="h1" text="titulo"/>
      <Footer/>


      </>
  )

}


