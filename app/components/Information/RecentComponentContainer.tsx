"use client";
import { useEffect, useState } from "react";
import GetMostRecentProperties from "@/app/apiCalls/Property/GetMostRecentProperties";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import SliderContentOfThree from "./SliderContentOfThree";
import { NavBarPath } from "../globalFormsConfig/navBarPaths"

export default function PropertyFilterWrapper() {
  const [purpose, setPurpose] = useState<string>("VENDA");
  const [properties, setProperties] = useState<PropertySpecificCard[]>([]); 

  useEffect(() => {
    async function fetchProperties() {
      const response = await GetMostRecentProperties(purpose);
      setProperties(response);
    }

    fetchProperties();
  }, [purpose]);

  const handleSelectPurpose = (selectedLabel: string) => {
    setPurpose(selectedLabel);
  };

  return (
    <div>
      <NavBarAdm options={NavBarPath.purpose} onSelect={handleSelectPurpose} />
      <SliderContentOfThree items={properties} />
    </div>
  );
}

