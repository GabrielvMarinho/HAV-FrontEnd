"use client"

import { JSX, useState } from "react";
import "./css/style.css";
import ButtonSlideContent from "../Inputs/ButtonSlideBackContent";
import ButtonSlideNextContent from "../Inputs/ButtonSlideNextContent"
import Cellphone from "../IconsTSX/CellPhone";
import Button from "../Inputs/Button";
import { useRouter } from "next/navigation";
import Shower from "../IconsTSX/Shower";
import Bed from "../IconsTSX/Bed";
import Garage from "../IconsTSX/Garage";
import Rule from "../IconsTSX/Rule";
import Sofa from "../IconsTSX/Sofa";
import decodeDoubleBase64 from "@/app/utils/decodeDoubleBase64";
import globalDatabaseNameConverter from "@/app/globalDatabaseNameConverter";

export default function SliderContent(props: { items: PropertySpecificCard[] }) {

  const [page, setPage] = useState(0)
  const nextPage = () => {
    setPage((prevPage) => (prevPage + 1) % props.items.length);
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage - 1 + props.items.length) % props.items.length);
  };


  const router = useRouter();
  function goToSpecificProperty(id: number | undefined) {
    console.log(id)
    router.push(`/property/${id}`)
  }
  return (
    <>
      <div className="sliderContent">

        <button onClick={prevPage} className="back-button">
          <ButtonSlideContent />
        </button>
        

        <div className="sliderContentMain">
          <div className="slider-item">
            <div className="highlightProperty">
            {props.items[page]?.mainImage ?
              <img src={`${decodeDoubleBase64(props.items[page]?.mainImage)}`} />

            :
            <img src="/Image/fotoSemPropriedade.png"/>

            }
              <div className="highlightPropertyBox">
                <div>
                  <p className="cityProperty">{globalDatabaseNameConverter[props.items[page]?.city]}</p>
                  <p className="neighborhoodProperty">{globalDatabaseNameConverter[props.items[page]?.neighborhood]}</p>
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Bed width={25} height={25} color="var(--text-white)" />
                        <span>{props.items[page]?.bedRoom}</span>
                      </div>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Shower width={25} height={25} color="var(--text-white)" />
                        <span>{props.items[page]?.bathRoom}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Sofa width={25} height={25} color="var(--text-white)" />
                        <span>{props.items[page]?.livingRoom}</span>
                      </div>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Garage width={25} height={25} color="var(--text-white)" />
                        <span>{props.items[page]?.garageSpace}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Rule width={25} height={25} color="var(--text-white)" />
                    <span>{props.items[page]?.area}m²</span>
                  </div>

                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
                  <p className="priceProperty">R${props.items[page]?.price}</p>
                  <Button type={"button"} size={"large"}
                    background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"}
                    text="SAIBA MAIS" onClick={() => goToSpecificProperty(props.items[page]?.id)} />
                </div>
              </div>

            </div>

          </div>
        </div>

       
        <button onClick={nextPage} className="next-button">
          <ButtonSlideNextContent />
        </button>
      </div>
    </>
  );
}