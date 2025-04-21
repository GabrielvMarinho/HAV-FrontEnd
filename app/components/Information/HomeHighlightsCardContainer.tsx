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
      setProperties(response); // Aqui você está setando as propriedades no estado
    }

    fetchProperties();
  }, [purpose]);

  const handleSelectPurpose = (selectedLabel: "VENDA" | "LOCAÇÃO") => {
    setPurpose(selectedLabel);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <NavBarAdm
        options={NavBarPath.purpose}
        onSelect={handleSelectPurpose}
        selected={purpose}
      />
      <div className="cardsContainer">
        {/* Aqui, substituímos props.cards por properties */}
        {properties.length > 0 ? (
          properties.map((card) => (
            <CardImovel key={card.id} obj={card} />
          ))
        ) : (
          <p>Nenhuma propriedade encontrada.</p> // Mensagem caso não haja propriedades
        )}
      </div>
      {/* Supondo que você tenha um total de páginas vindo do seu backend */}
      <PageManager totalPages={1} />
    </div>
  );
}
