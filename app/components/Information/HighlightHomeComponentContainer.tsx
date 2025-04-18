"use client";
import { useEffect, useState } from "react";
import HomeHighlightsCardContainer from "./HomeHighlightsCardContainer";
import NavBarAdm from "../Header/NavBarAdm";
import { NavBarPath } from "../globalFormsConfig/navBarPaths";
import { GetHighlightsHome } from "@/app/apiCalls/Property/GetHighlightedHome";

export default function HighlightHomeComponentContainer() {
  const [purpose, setPurpose] = useState<string>("VENDA");
  const [highlightsCards, setHighlightsCards] = useState<PropertySpecificCard[]>([]);
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    async function fetchHighlights() {
      const response = await GetHighlightsHome(purpose);
      setHighlightsCards(response.highlightsCards || []);
      setPages(response.pages || 1);
    }

    fetchHighlights();
  }, []);

  const handleSelectPurpose = (selectedLabel: string) => {
    setPurpose(selectedLabel);
  };

  return (
    <div>
      <NavBarAdm options={NavBarPath.purpose} onSelect={handleSelectPurpose} />
      <HomeHighlightsCardContainer cards={highlightsCards} totalPages={pages} />
    </div>
  );
}
