"use client"
import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import getAllUsersNumber from "@/app/apiCalls/User/getAllRegistredNumber";
import { useState, useEffect } from "react";
import getQuantityProprietor from "@/app/apiCalls/Proprietor/getQuantityProprietor";
import getPercentageProprietors from "@/app/apiCalls/Proprietor/getPercentageProprietors";
import getQuantityCustomer from "@/app/apiCalls/Customer/getQuantityCustomer";
import getPercentageCustomer from "@/app/apiCalls/Customer/getPercentageCustomer";
import HorizontalBarChart from "@/app/components/BarChart/HorizontalBarChart";
import VerticalBarChart from "@/app/components/BarChart/VerticalBarChart";

export default function ReportsPage() {
  const [allUsersNumber, setAllUsersNumber] = useState(0);
  const [allProprietors, setAllProprietors] = useState(0);
  const [percentageProprietors, setPercentageProprietors] = useState(0);
  const [allCustomers, setAllCustomers] = useState(0);
  const [percentageCustomer, setPercentageCustomer] = useState(0);

  // Dados para os gráficos verticais
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'];
  const [novosUsuariosData, setNovosUsuariosData] = useState([25, 50, 30, 60, 45, 75]);
  const [visitasData, setVisitasData] = useState([400, 800, 1200, 600, 900, 1500]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          usersNumber,
          proprietors,
          proprietorsPercentage,
          customers,
          customersPercentage
        ] = await Promise.all([
          getAllUsersNumber(),
          getQuantityProprietor(),
          getPercentageProprietors(),
          getQuantityCustomer(),
          getPercentageCustomer()
        ]);
        
        setAllUsersNumber(usersNumber);
        setAllProprietors(proprietors);
        setPercentageProprietors(proprietorsPercentage);
        setAllCustomers(customers);
        setPercentageCustomer(customersPercentage);
        
        // Aqui você pode setar os dados reais dos gráficos verticais
        // quando tiver as APIs correspondentes:
        // setNovosUsuariosData([...dadosDaAPI]);
        // setVisitasData([...dadosDaAPI]);
        
      } catch (e) {
        console.error("Erro na API:", e);
      }
    };
    fetchData();
  }, []);

  // Dados para o gráfico horizontal
  const horizontalLabels = [
    `${percentageProprietors}% PROPRIETÁRIOS`,
    `${percentageCustomer}% USUÁRIOS COMUNS`,
    `${"0"}% BLOQUEADOS`
  ];

  const horizontalData = [allProprietors, allCustomers];
  const barColors = ["#B23F52"];

  return (
    <>
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
            <h3 className="users-big-number">{allUsersNumber}</h3>
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
              maxValue={75}
            />
          </div>
          <div className="users-data-box">
            <h3 className="users-big-number">123</h3>
            <p className="users-small-text">
              65% usuários comuns sem propriedade à venda
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
              maxValue={2000}
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
    </>
  );
}