"use client"
import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import HorizontalBarChart from "@/app/components/BarChart/HorizontalBarChart";
import getPercentageArchived from "@/app/apiCalls/Property/getPercentageArchived"; {/*Funcionando */ }
import getQuantityArchived from "@/app/apiCalls/Realtor/getQuantityArchived"; {/*Funcionando */ }
import getAllNumber from "@/app/apiCalls/Realtor/getAllNumber";

import { useState, useEffect } from "react";
import VerticalBarChart from "@/app/components/BarChart/VerticalBarChart";
import AuthGuard from "@/app/context/AuthGuard";

export default function ReportsPage() {
  // Dados para os gráficos verticais (mantidos como no seu exemplo)
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'];
  const [novosUsuariosData] = useState([25, 50, 30, 60, 45, 75]);
  const [visitasData] = useState([95000, 10000, 50000, 17000, 16000, 10000]);

  // Dados para o gráfico horizontal no mesmo padrão
  const [userStats] = useState({
    proprietarios: 893,
    usuariosComuns: 1750,
    bloqueados: 486
  });

  // Calculando totais e porcentagens
  const totalUsers = userStats.proprietarios + userStats.usuariosComuns + userStats.bloqueados;
  const percentageProprietors = Math.round((userStats.proprietarios / totalUsers) * 100);
  const percentageCustomers = Math.round((userStats.usuariosComuns / totalUsers) * 100);
  const percentageBlocked = Math.round((userStats.bloqueados / totalUsers) * 100);

  // Preparando dados para o gráfico horizontal
  const horizontalLabels = [
    `${percentageProprietors}% PROPRIETÁRIOS`,
    `${percentageCustomers}% USUÁRIOS COMUNS`,
    `${percentageBlocked}% BLOQUEADOS`
  ];

  const horizontalData = [
    userStats.proprietarios,
    userStats.usuariosComuns,
    userStats.bloqueados
  ];

  const barColors = ["#B23F52"];

  return (
    <>
    <AuthGuard requiredRole="ROLE_ADMIN">
        <Title tag={"h1"} text={"ESTATÍSTICAS E ANÁLISES"} />

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
            <h3 className="users-big-number">421</h3>
            <p className="users-small-text">Desde 2025</p>
          </div>
          <div className="users-graph-container">
            <HorizontalBarChart 
              labels={horizontalLabels} 
              data={horizontalData} 
              backGroundColors={barColors} 
            />            
          </div>
          </div>
        </section>

        <section className="users-section">
        <div className="reports-graphTitle">
          <p>AGENDAMENTOS</p>
        </div>
        <div className="users-data-row">
          <div className="users-data-box">
            <h3 className="users-big-number">421</h3>
            <p className="users-small-text">Desde 2025</p>
          </div>
          <div className="users-graph-container">
            <HorizontalBarChart 
              labels={horizontalLabels} 
              data={horizontalData} 
              backGroundColors={barColors} 
            />            
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
          <VerticalBarChart 
              months={meses}
              values={novosUsuariosData}
              title="Novos Usuários por Mês"
              scaleType="default"
            />
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
            <div className="placeholder-graph">
            <VerticalBarChart 
              months={meses}
              values={visitasData}
              title="Visitas por Mês"
              scaleType="thousands"
            />            
            </div>
          </div>
          <div className="users-data-box">
            <h3 className="users-big-number">123</h3>
            <p className="users-small-text">
              93% agendamentos para imóvel de moradia
            </p>
          </div>
          </div>
        </section>
      </AuthGuard>
    </>
  );
}
