"use client"
import "./css/style.css"
import Title from "../../components/NonInteractable/Title";
import NavBarEstatisticaEAnalise from "../../components/Header/NavBarEstatisticaEAnalise"
import Subtitle from "../../components/NonInteractable/Subtitle";
import { useEffect, useState } from "react";
import HorizontalBarChart from "@/app/components/BarChart/HorizontalBarChart";
import getPercentageRent from "@/app/apiCalls/Property/getRentPercentage"
import getTotalRentProperties from "@/app/apiCalls/Property/getTotalRentProperties";
import getTotalProperties from "@/app/apiCalls/Property/getTotalProperties";
import getTotalForSaleProperties from "@/app/apiCalls/Property/getTotalForSaleProperties";
import getTotalArchivedProperties from "@/app/apiCalls/Property/getTotalArchivedProperties";
import getPercentageForSale from "@/app/apiCalls/Property/getPercentageForSale";
import getPercentageArchived from "@/app/apiCalls/Property/getPercentageArchived";

export default function RelatorioEAnalise() {

    const [totalProperties, setTotalProperties] = useState(0);
    const [percentageRent, setPercentageRent] = useState(0);
    const [totalRent, setTotalRent] = useState(0);
    const [totalForSale, setTotalForSale] = useState(0);
    const [totalArchived, setTotalArchived] = useState(0)
    const [percentageForSale, setPercentageForSale] = useState(0);
    const [PercentageArchived, setPercentageArchived] = useState(0)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const [
                    percentageRent,
                    totalRent,
                    totalProperties,
                    totalForSale,
                    totalArchived,
                    percentageForSale,
                    PercentageArchived
                ] =
                    await Promise.all([
                        getPercentageRent(),
                        getTotalRentProperties(),
                        getTotalProperties(),
                        getTotalForSaleProperties(),
                        getTotalArchivedProperties(),
                        getPercentageForSale(),
                        getPercentageArchived()
                    ]);
                setPercentageRent(percentageRent)
                setTotalRent(totalRent)
                setTotalProperties(totalProperties)
                setTotalForSale(totalForSale)
                setTotalArchived(totalArchived)
                setPercentageForSale(percentageForSale)
                setPercentageArchived(PercentageArchived)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])


    const labels = [
        `${percentageRent}% Locação`,
        `${percentageForSale}% Venda`,
        `${PercentageArchived}% Arquivados`
    ];
    const data = [totalRent, totalForSale, totalArchived];

    return (
        <>

            <Title tag="h1" text="Estatísticas e análises" />
            <NavBarEstatisticaEAnalise />
            <div style={{ display: "flex", flexDirection: "column", gap: "70px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "490px" }}>
                    <Subtitle text="dados totais" lineDirection="left" />
                    <p className="exportdatas">EXPORTAR DADOS</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="boxAllRegistredProperties">
                        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                            <p className="numberOfProperty">{totalProperties}</p>
                            <p style={{ fontSize: "var(--text-m)", opacity: "0.6" }}>Desde 2025</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '80%', margin: '2rem auto' }}>
                <h2>Gráfico de Propriedades</h2>
                <HorizontalBarChart labels={labels} data={data} />
            </div>
        </>
    );
}