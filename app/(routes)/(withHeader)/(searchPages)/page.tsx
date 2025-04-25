
import Title from "../../../components/NonInteractable/Title"
import Footer from "@/app/components/Footer/Footer"
// import { getServerSession } from "next-auth"
import Image from "next/image";
import "@/public/Image/css/style.css"
import MainFilter from "@/app/components/Filters/MainFilter";
import "@/app/GeneralPages.css"
import "@/app/variables.css"
import HavLogoDark from "@/app/components/IconsTSX/HavLogoDark";
import MainHomeInfo from "@/app/components/Information/mainHomeInfo";
import SliderPropertyHighlights from "@/app/components/Information/SliderPropertyHighlights";
import GetRandomPropertiesHighlightRandom from "@/app/apiCalls/Property/GetRandomPropertiesHighlightRandom";
import GetMostRecentProperties from "@/app/apiCalls/Property/GetMostRecentSellProperties";
import SliderContentOfThree from "@/app/components/Information/SliderContentOfThree";
import HomeHighlightsCardContainer from "@/app/components/Information/HomeHighlightsCardContainer";
import RecentComponentContainer from "@/app/components/Information/RecentComponentContainer"
import { Chela_One } from "next/font/google";
import CardContainer from "@/app/components/Information/CardContainer";

export default async function Home() {

  const mostRecentProperties = await GetMostRecentProperties()
  const properties = await GetRandomPropertiesHighlightRandom()
  console.log("properties", properties)
  return (
    <>
      <img className={"bannerHome"} src="/Image/BannerHome.png" />
      <section className="homeMainSection">
        <div className={"bannerHomeTitle"} style={{ display: "flex", alignItems: "center", marginBottom: "60px" }}>
          <h1 className="mainTitleHome">CONECTANDO VOCÊ AO SEU NOVO LAR</h1>
          <div className="HavLogoMain">
            <HavLogoDark height={160} width={160} />
          </div>
        </div>

        <MainFilter />
      </section>

      <div className="bannerHomeLine"></div>
      {properties.length > 0 ?
        <>
          <section className="homeHiglightProperties">
            <div style={{margin:"20px"}}>
              <h3>IMÓVEIS EM</h3>
              <h2>DESTAQUE</h2>
            </div>
            <SliderPropertyHighlights items={properties} />
          </section>
          <section className="homeHiglightPropertiesMobile">
            <div style={{margin:"20px"}}>
              <h3>IMÓVEIS EM</h3>
              <h2>DESTAQUE</h2>
            </div>
            <CardContainer cards={properties} totalPages={0}/>
          </section>

        </>
        : ""
      }

      <Title text="transformando sonhos em endereços" tag="h1" />

      <MainHomeInfo />

      <section className="highlightsCards">
        <Title tag="h1" text="Imóveis em Promoção" />
        <HomeHighlightsCardContainer />
      </section>

      <section className="recentProperties">
        <Title tag="h1" text="Imóveis adicionados recentemente" />
        <RecentComponentContainer />
      </section>



    </>
  )

}


