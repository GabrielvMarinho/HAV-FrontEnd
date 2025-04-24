"use client";

import CardImovel from "../Cards/CardImovel";
import PageManager from "../Inputs/PageManager";
import "./css/style.css";
import GetHighlightedHomeLease from "@/app/apiCalls/Property/GetHighlightedHomeLease";
import GetHiglightedHomeSell from "@/app/apiCalls/Property/GetHiglightedHomeSell";
import { NavBarPath } from "../globalFormsConfig/navBarPaths";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { useEffect, useState } from "react";

const fetchFunctions = {
  LOCAÇÃO: GetHighlightedHomeLease,
  VENDA: GetHiglightedHomeSell,
};

export default function HomeHighlightsCardContainer() {
  const [purpose, setPurpose] = useState<"VENDA" | "LOCAÇÃO">("VENDA");
  const [properties, setProperties] = useState<PropertySpecificCard[]>([]);

  useEffect(() => {
    async function fetchProperties() {
      const response = await fetchFunctions[purpose]();
      setProperties(response);  
    }

    fetchProperties();
  }, [purpose]);

  const handleSelectPurpose = (selectedLabel: "VENDA" | "LOCAÇÃO") => {
    setPurpose(selectedLabel);
  };

  const text  = `Nenhuma propriedade por ${purpose} foi encontrada `

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      {/* <NavBarAdm
        options={NavBarPath.purpose}
        onSelect={handleSelectPurpose}
        selected={purpose}
      /> */}
      <div className="cardsContainer">
        {properties.length > 0 ? (
          properties.map((card) => (
            <CardImovel key={card.id} obj={card} />
          ))
        ) : (
          <p style={{fontWeight: "700px", fontSize: "20px", margin: "0 auto"}}>{text}</p> 
        )}
      </div>
      <PageManager totalPages={1} />
    </div>
  );
}
