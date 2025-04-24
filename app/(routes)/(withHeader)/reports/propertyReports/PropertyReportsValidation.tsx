"use client"
import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import HorizontalBarChart from "@/app/components/BarChart/HorizontalBarChart";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import { useEffect, useState } from "react";
import VerticalBarChart from "@/app/components/BarChart/VerticalBarChart";
import AuthGuard from "@/app/context/AuthGuard";

export default function PropertyReportsValidation() {
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'];
  const [novosUsuariosData] = useState([25, 50, 30, 60, 45, 75]);
  const [visitasData] = useState([95000, 10000, 50000, 17000, 16000, 10000]);

  const [userStats] = useState({
    proprietarios: 2,
    usuariosComuns: 3,
    bloqueados: 1
  });

  const totalUsers = userStats.proprietarios + userStats.usuariosComuns + userStats.bloqueados;
  const percentageProprietors = Math.round((userStats.proprietarios / totalUsers) * 100);
  const percentageCustomers = Math.round((userStats.usuariosComuns / totalUsers) * 100);
  const percentageBlocked = Math.round((userStats.bloqueados / totalUsers) * 100);

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
    
        <Title tag={"h1"} text={"ESTATÍSTICAS E ANÁLISES"} />
        <NavBarAdm options={NavBarPath.reports}/>
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
            <h3 className="users-big-number">6</h3>
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
            <p>NOVOS IMÓVEIS</p>
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
              <h3 className="users-big-number">123</h3>
              <p className="users-small-text">
                65% usuários comuns sem propriedade á venda
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row-boxes">
            <div className="info-data-column">
              <p className="info-textTitle">COMPARTILHADOS</p>
              <div className="info-data-box">
                <h3 className="info-big-number">11.2 MIL</h3>
                <p className="info-small-text">
                  25% compartilhados pelo Whatsapp
                </p>
              </div>
            </div>
            <div className="info-data-column">
              <p className="info-textTitle">FAVORITADOS</p>
              <div className="info-data-box">
                <h3 className="info-big-number">199.2 MIL</h3>
                <p className="info-small-text">
                  59% imóveis de venda ou locação para moradia
                </p>
              </div>
            </div>
            <div className="info-data-column">
              <p className="info-textTitle">GERARAM CHAT</p>
              <div className="info-data-box">
                <h3 className="info-big-number">1.2 MIL</h3>
                <p className="info-small-text">37% conversados por Whatsapp</p>
              </div>
            </div>
          </div>
        </section>

        <section className="users-section">
          <div className="data-TitleRight">
            <SideTitle tag={"h2"} text={"DADOS RECENTES"} />
          </div>
          <div className="data-Container">
            <table className="properties-table">
              <thead>
                <tr>
                  <th>ID IMÓVEL</th>
                  <th>PROPRIETÁRIO</th>
                  <th>TIPO IMÓVEL</th>
                  <th>CATEGORIA</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>2357U4</td>
                  <td>Bianca Isabela Vaz</td>
                  <td className="house-type">CASA</td>
                  <td className="status-type">COMPRA</td>
                  <td className="status-launch">LANÇAMENTO</td>
                </tr>
                <tr className="table-divider">
                  <td colSpan={5}>
                    <HorizontalLine size={1000} color="#0F0F0F80" />
                  </td>
                </tr>
                <tr className="table-row">
                  <td>8A729I</td>
                  <td>Gabriel Volles Marinho</td>
                  <td className="house-type">CASA</td>
                  <td className="status-type">COMPRA</td>
                  <td className="status-launch">LANÇAMENTO</td>
                </tr>
                <tr className="table-divider">
                  <td colSpan={5}>
                    <HorizontalLine size={1000} color="#0F0F0F80" />
                  </td>
                </tr>
                <tr className="table-row">
                  <td>1KS328</td>
                  <td>Nathan João Lima</td>
                  <td className="house-type">APARTAMENTO</td>
                  <td className="status-type">LOCAÇÃO</td>
                  <td className="status-launch">PENDENTE</td>
                </tr>
                <tr className="table-divider">
                  <td colSpan={5}>
                    <HorizontalLine size={1000} color="#0F0F0F80" />
                  </td>
                </tr>
                <tr className="table-row">
                  <td>762OP9</td>
                  <td>Rafael da Rosa</td>
                  <td className="house-type">CASA</td>
                  <td className="status-type">COMPRA</td>
                  <td className="status-launch">LANÇAMENTO</td>
                </tr>
                <tr className="table-divider">
                  <td colSpan={5}>
                    <HorizontalLine size={1000} color="#0F0F0F80" />
                  </td>
                </tr>
                <tr className="table-row">
                  <td>38J925</td>
                  <td>Eduardo Vizoni do Prado</td>
                  <td className="house-type">CASA</td>
                  <td className="status-type">COMPRA</td>
                  <td className="status-launch">LANÇAMENTO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </>
  );
}