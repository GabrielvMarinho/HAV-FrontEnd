"use client"
import "../css/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import Footer from "@/app/components/Footer/Footer";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import getAllNumber from "@/app/apiCalls/Realtor/getAllNumber";
import getPercentageArchived from "@/app/apiCalls/Property/getPercentageArchived"; {/*Funcionando */}
import getQuantityArchived from "@/app/apiCalls/Realtor/getQuantityArchived"; {/*Funcionando */}
import { useState, useEffect } from "react";

export default function page() {

  const [allRealtorsNumber, setAllRealtorsNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          allRealtorsNumber
        ] =
          await Promise.all([
            getAllNumber()
          ])
        setAllRealtorsNumber(allRealtorsNumber)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Title tag={"h1"} text={"ESTATÍSTICAS E ANÁLISES"} />
      <NavBarAdm options={NavBarPath.reports} />

      {/* Container principal para centralizar o conteúdo */}
      <div className="reports-container">
        <div className="data-Title">
          <SideTitle tag={"h1"} text={"DADOS TOTAIS"} />
          <div className="reports-subtitle">
            <p>EXPORTAR DADOS</p>
          </div>
        </div>
      </div>

      <section className="users-section">
        <div className="reports-graphTitle">
          <p>CORRETORES</p>
        </div>
        <div className="users-data-row">
          <div className="users-data-box">
            <h3 className="users-big-number">{allRealtorsNumber}</h3>
            <p className="users-small-text">Desde 2025</p>
          </div>
          <div className="users-graph-container">
            <div className="placeholder-graph">Gráfico</div>
          </div>
        </div>
      </section>

      <section className="users-section">
        <div className="reports-graphTitle">
          <p>AGENDAMENTOS</p>
        </div>
        <div className="users-data-row">
          <div className="users-data-box">
            <h3 className="users-big-number">1.2 MIL</h3>
            <p className="users-small-text">Desde 2025</p>
          </div>
          <div className="users-graph-container">
            <div className="placeholder-graph">Gráfico</div>
          </div>
        </div>
      </section>

      <section className="users-section">
        <div className="data-TitleRight">
          <SideTitle tag={"h2"} text={"DADOS RECENTES"} />
        </div>
        <div className="reports-graphTitleRight">
          <p>NOVOS CORRETORES</p>
        </div>
        <div className="users-data-row">
          <div className="users-graph-container">
            <div className="placeholder-graph">Gráfico</div>
          </div>
          <div className="users-data-box">
            <h3 className="users-big-number">21</h3>
            <p className="users-small-text">
              100% se manteram ativos desde então
            </p>
          </div>
        </div>
      </section>

      <section className="users-section">
        <div className="reports-graphTitleRight">
          <p>VISIATAS AO SITE</p>
        </div>
        <div className="users-data-row">
          <div className="users-graph-container">
            <div className="placeholder-graph">Gráfico</div>
          </div>
          <div className="users-data-box">
            <h3 className="users-big-number">123</h3>
            <p className="users-small-text">
              93% agendamentos para imóvel de moradia
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
