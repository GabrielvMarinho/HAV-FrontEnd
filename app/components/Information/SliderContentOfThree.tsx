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
import CardImovel from "../Cards/CardImovel";



export default function SliderContent(props: { items: PropertySpecificCard[] }) {

  const [page, setPage] = useState(0)
  const nextPage = () => {
    setPage((prevPage) => (prevPage + 3) % props.items.length);
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage - 3 + props.items.length) % props.items.length);
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

        <CardImovel obj={props.items}/>

        <button onClick={nextPage} className="next-button">
          <ButtonSlideNextContent />
        </button>
      </div>
    </>
  );
}