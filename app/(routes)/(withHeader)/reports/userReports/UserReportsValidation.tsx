'use client'

import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import { use, useEffect, useState } from "react";
import HorizontalBarChart from "@/app/components/BarChart/HorizontalBarChart";
import VerticalBarChart from "@/app/components/BarChart/VerticalBarChart";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import getQuantityCustomer from "@/app/apiCalls/Customer/getQuantityCustomer";
import getPercentageCustomer from "@/app/apiCalls/Customer/getPercentageCustomer";
import getPercentageProprietors from "@/app/apiCalls/Proprietor/getPercentageProprietors";
import getPercentageArchived from "@/app/apiCalls/User/getPercentageArchived";
import getQuantityProprietor from "@/app/apiCalls/Proprietor/getQuantityProprietor";
import getQuantityArchived from "@/app/apiCalls/User/getQuantityArchived";

export default function UserReportsValidation() {
  // Dados para os gráficos verticais (mantidos como no seu exemplo)
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'];
  const [novosUsuariosData] = useState([1, 2, 2, 1, 0, 0]);
  const [visitasData] = useState([0, 0, 0, 3, 0, 0]);
  const [totaCustomers, setTotalCustomers] = useState(0);
  const [percentageCustomers, setPercentageCustomers] = useState(0);
  const [percentageProp, setPercentageProp] = useState(0);
  const [percentageArchived, setPercentageArchived] = useState(0);
  const [getQuantityProprietors, setGetQuantityProprietor] = useState(0);
  const [getQuantityArchiveds, setgetQuantityArchived] = useState(0);

  useEffect(() => {
    async function fetchData(){
      try{
        const totalCustomers = await getQuantityCustomer();
        setTotalCustomers(totalCustomers);

        const percentageCustomers = await getPercentageCustomer();
        setPercentageCustomers(percentageCustomers)

        const percentageProps = await getPercentageProprietors()
        setPercentageProp(percentageProps)

        const percentageArchived = await getPercentageArchived()
        setPercentageArchived(percentageArchived)

        const getQuantityProprietors = await getQuantityProprietor()
        setGetQuantityProprietor(getQuantityProprietors)

        const getQuantityArchiveds = await getQuantityArchived()
        setgetQuantityArchived(getQuantityArchiveds)

      }catch(e){
        console.log(e);
      }
    }
    fetchData()
  }, [])

  // Dados para o gráfico horizontal no mesmo padrão
  const [userStats] = useState({

    bloqueados: 0
  });

  // Calculando totais e porcentagens

  // Preparando dados para o gráfico horizontal
  const horizontalLabels = [
    `${percentageProp}% PROPRIETÁRIOS`,
    `${percentageCustomers}% USUÁRIOS COMUNS`,
    `${percentageArchived}% ARQUIVADOS`
  ];

  const horizontalData = [
    getQuantityProprietors,
    totaCustomers,
    getQuantityArchiveds
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
            <h3 className="users-big-number">{totaCustomers}</h3>
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
          <div className="users-data-box">
            <h3 className="users-big-number">6</h3>
            <p className="users-small-text">
            75% usuários comuns sem propriedade á venda
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
            <h3 className="users-big-number">3</h3>
            <p className="users-small-text">
              33% feitas por usuários sem uma conta
            </p>
          </div>
          </div>
        </section>
    </>
  );
}