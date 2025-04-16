"use client";
import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import { useState } from "react";
import HorizontalBarChart from "@/app/components/BarChart/HorizontalBarChart";
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
        <NavBarAdm options={NavBarPath.reports} />

      <div className="reports-container">
        <div className="data-Title">
          <SideTitle tag={"h1"} text={"DADOS TOTAIS"} />
          <div className="reports-subtitle">
            <p>EXPORTAR DADOS</p>
          </div>
        </div>
        </div>

      {/* Seção de Usuários (gráfico horizontal) */}
      <section className="users-section">
        <div className="reports-graphTitle">
          <p>USUÁRIOS</p>
        </div>
        <div className="users-data-row">
          <div className="users-data-box">
            <h3 className="users-big-number">3.2 MIL</h3>
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

      {/* Seção de Novos Usuários (gráfico vertical) */}
      <section className="users-section">
        <div className="data-TitleRight">
          <SideTitle tag={"h2"} text={"DADOS RECENTES"} />
        </div>
        <div className="reports-graphTitleRight">
          <p>NOVOS USUÁRIOS</p>
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
          </div>
          <div className="users-data-box">
            <h3 className="users-big-number">123</h3>
            <p className="users-small-text">
              65% usuários comuns sem propriedade à venda
            </p>
          </div>
          <div className="users-data-row">
            <div className="users-graph-container">
              <div className="placeholder-graph">Gráfico</div>
            </div>
            <div className="users-data-box">
              <h3 className="users-big-number">123</h3>
              <p className="users-small-text">
                65% usuários comuns sem propriedade á venda
              </p>
            </div>
          </div>
        </section>

      {/* Seção de Visitas (gráfico vertical) */}
      <section className="users-section">
        <div className="reports-graphTitleRight">
          <p>VISITAS AO SITE</p>
        </div>
        <div className="users-data-row">
          <div className="users-graph-container">
            <VerticalBarChart 
              months={meses}
              values={visitasData}
              title="Visitas por Mês"
              scaleType="thousands"
            />
          </div>
          <div className="users-data-box">
            <h3 className="users-big-number">143.2 MIL</h3>
            <p className="users-small-text">
              40% feitas por usuários sem uma conta
            </p>
          </div>
          </div>
        </section>
      </AuthGuard>
    </>
  );
}