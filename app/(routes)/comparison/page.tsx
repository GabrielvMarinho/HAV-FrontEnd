"use client";

import HeaderAdm from "@/app/components/Header/HeaderAdm";
import Title from "@/app/components/NonInteractable/Title";
import "../comparison/style/style.css";
import { useState } from "react";
import AddComparison from "@/app/components/IconsTSX/addComparison";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import VerticalLine from "@/app/components/NonInteractable/VerticalLine";

const PROPERTY_ATTRIBUTES = [
  { label: "FINALIDADE", key: "purpose" },
  { label: "TIPO DE IMÓVEL", key: "type" },
  { label: "VALOR", key: "value" },
  { label: "ÁREA / M²", key: "area" },
  { label: "QUARTOS", key: "bedrooms" },
  { label: "SUÍTES", key: "suites" },
  { label: "BANHEIROS", key: "bathrooms" },
  { label: "VAGAS", key: "garage" },
  { label: "PETS", key: "pets" },
  { label: "LEGENDA", key: "subtitle" }
];

export default function Comparison() {
  const [properties, setProperties] = useState([]);

  const addProperty = () => {
    console.log("Adicionar novo imóvel");
  };

  return (
    <>
      <HeaderAdm />
      <Title tag={"h1"} text={"COMPARAÇÃO DE IMÓVEIS"} />

      <div className="comparison-container">
        {/* Linha de botões */}
        <div className="add-property-row">
          {[1, 2, 3].map((item) => (
            <div key={item} className="add-property-card" onClick={addProperty}>
              <AddComparison width={50} height={50} color="#5F1E2A" />
              <span>Adicionar Imóvel</span>
            </div>
          ))}
        </div>

        {/* Tabela de comparação */}
        <div className="comparison-table-container">
          {PROPERTY_ATTRIBUTES.map((attr) => (
            <div key={attr.key} className="table-section">
              <div className="table-row">
                <div className="header-cell">{attr.label}</div>
                
                {[0, 1, 2].map((index) => (
                  <div key={index} className="property-cell-group">
                    <VerticalLine height={95} color="#0F0F0F80" />
                    <div className="table-cell">
                      {properties[index]?.[attr.key] || "—"}
                    </div>
                  </div>
                ))}
                
                <VerticalLine height={95} color="#0F0F0F80" />
              </div>
              <HorizontalLine size={999} color="#0F0F0F80" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}