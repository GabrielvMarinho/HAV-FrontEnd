
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
import CardImovel from "@/app/components/Cards/CardImovel"
// import { getServerSession } from "next-auth"
import Image from "next/image";
import "@/public/Image/css/style.css"
import MainFilter from "@/app/components/Filters/MainFilter";
import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import "../../GeneralPages.css"
import "../../variables.css"

import HavLogoDark from "@/app/components/IconsTSX/HavLogoDark";
import MainHomeInfo from "@/app/components/Information/mainHomeInfo";
import SliderContent from "@/app/components/Information/SliderContent";
import ChamadaTelefonica from "../../components/IconsTSX/CellPhone";
import Button from "@/app/components/Inputs/Button";
import PropertyPrice from "@/app/components/NonInteractable/PropertyPrice"
import TableList from "@/app/components/Information/TableList";
import TableListChoose from "@/app/components/Information/TableListChoose";
import TableListHistory from "@/app/components/Information/TableListHistory";

export default function Home() {

  // const session = getServerSession()
  
  // console.log(session)
  const images = [
    "https://images.unsplash.com/photo-1726607962647-84ec2451d553?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1734543942868-2470c4cba7b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1742201408341-29204ea79380?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  ];

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
    <section className="homeHiglightProperties">
      
      <h3>IMÓVEIS EM</h3>
      <h2>DESTAQUE</h2>
      <SliderContent items={
        [
        
        
        
        
        
        
          <div className="highlightProperty">
          <img src={images[0]}/>
          <div className="highlightPropertyBox">
            <div>
              <h3>JARAGUÁ DO SUL</h3>
              <h2>VILA NOVA</h2>
            </div>
          <div style={{display: "flex", gap: "15px"}}>
            <div style={{display: "flex", flexDirection: "column", gap:"15px"}}>
              <div style={{display: "flex", gap: "15px"}}>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                    <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                  <span>2</span>
                  </div>
                </div>
                <div style={{display: "flex", gap: "15px"}}>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                    <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                </div>
                </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                
                </div>
              <div style={{display: "flex", gap: "20px", justifyContent: "space-between"}}>
              <h2>R$2.000.000,00</h2>
              <Button type={"button"} size={"large"}background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text="SAIBA MAIS"/>
              </div>
          </div>

        </div>
        
        
        , 


        <div className="highlightProperty">
          <img src={images[1]}/>
          <div className="highlightPropertyBox">
            <div>
              <h3>JARAGUÁ DO SUL</h3>
              <h2>VILA NOVA</h2>
            </div>
          <div style={{display: "flex", gap: "15px"}}>
            <div style={{display: "flex", flexDirection: "column", gap:"15px"}}>
              <div style={{display: "flex", gap: "15px"}}>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                    <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                  <span>2</span>
                  </div>
                </div>
                <div style={{display: "flex", gap: "15px"}}>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                    <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                </div>
                </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                
                </div>
              <div style={{display: "flex", gap: "20px", justifyContent: "space-between"}}>
              <h2>R$2.000.000,00</h2>
              <Button type={"button"} size={"large"}background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text="SAIBA MAIS"/>
              </div>
          </div>

        </div>
        
        
        
        , 


        <div className="highlightProperty">
          <img src={images[2]}/>
          <div className="highlightPropertyBox">
            <div>
              <h3>JARAGUÁ DO SUL</h3>
              <h2>VILA NOVA</h2>
            </div>
          <div style={{display: "flex", gap: "15px"}}>
            <div style={{display: "flex", flexDirection: "column", gap:"15px"}}>
              <div style={{display: "flex", gap: "15px"}}>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                    <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                  <span>2</span>
                  </div>
                </div>
                <div style={{display: "flex", gap: "15px"}}>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                    <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                </div>
                </div>
                  <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                  <ChamadaTelefonica width={25} height={25} color="var(--text-white)"/>
                    <span>2</span>
                  </div>
                
                </div>
              <div style={{display: "flex", gap: "20px", justifyContent: "space-between"}}>
              <h2>R$2.000.000,00</h2>
              <Button type={"button"} size={"large"}background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text="SAIBA MAIS"/>
              </div>
          </div>

        </div>
      
      
      
      
      
      ]
      }/>      
    </section>
    <TableListHistory totalPages={1} titles={["asd", "asdad"]} data={[["3", "dsa"], ["2", "dsa"]]}/>
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


