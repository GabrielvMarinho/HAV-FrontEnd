"use client"

import GetMostRecentSellProperties from "@/app/apiCalls/Property/GetMostRecentSellProperties";
import GetMostRecentLeaseProperties from "@/app/apiCalls/Property/GetMostRecentLeaseProperties";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import SliderContentOfThree from "./SliderContentOfThree";
import { NavBarPath } from "../globalFormsConfig/navBarPaths";
import { useEffect, useState } from "react";

const fetchFunctions = {
  VENDA: GetMostRecentSellProperties,
  LOCAÇÃO: GetMostRecentLeaseProperties,
};

export default function PropertyFilterWrapper() {
  const [purpose, setPurpose] = useState<"VENDA" | "LOCAÇÃO">("VENDA");
  const [properties, setProperties] = useState<PropertySpecificCard[]>([]); 

  useEffect(() => {
    async function fetchProperties() {
      const response = await fetchFunctions[purpose]();
      setProperties(response);
      console.log("itens", response)

    }

    fetchProperties();
  }, [purpose]);

  const handleSelectPurpose = (selectedLabel: "VENDA" | "LOCAÇÃO") => {
    setPurpose(selectedLabel);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      {/* <NavBarAdm
        options={NavBarPath.purpose}
        onSelect={handleSelectPurpose}
        selected={purpose}
      /> */}
      <SliderContentOfThree items={properties} />
    </div>
  );
}
