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
  console.log("props", props.items.length)
  const [page, setPage] = useState(0)
  const nextPage = () => {
    setPage((prevPage) => (prevPage + 3) % props.items.length);
  };
  console.log("itens", props.items)
  const prevPage = () => {
    setPage((prevPage) => (prevPage - 3 + props.items.length) % props.items.length);
  };
  const getVisibleItems = () => {
    var start = page;
    let end = start + 3;
    
    // Se ultrapassar o final, ajusta para pegar os itens restantes
    if (end > props.items.length) {
      end = props.items.length;
      // Volta alguns itens para sempre mostrar 3, se possível
      start = Math.max(0, end - 3);
    }
    
    return props.items.slice(start, end);
  };
  const visibleItems = getVisibleItems();

  return (
    <>
      <div className="sliderContent">

      <button onClick={prevPage} className="back-button">
      <ButtonSlideContent />
    </button>

      <div className="items-container">
        {visibleItems.map((item, index) => (
          <CardImovel key={index} obj={item} />
        ))}
      </div>

    <button onClick={nextPage} className="next-button">
      <ButtonSlideNextContent />
    </button>
      </div>
    </>
  );
}