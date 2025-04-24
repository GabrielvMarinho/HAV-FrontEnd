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
import getAllRegistredNumber from "@/app/apiCalls/Property/getAllRegistredNumber";
import getPercentageForSale from "@/app/apiCalls/Property/getPercentageForSale";

export default function PropertyReportsValidation() {
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'];
  const [novosImoveisData] = useState([1, 2, 2, 4, 3, 5]);
  const [visitasData] = useState([0, 0, 0, 3, 0, 0]);
  const [quantityProperty, setQuantityProperty] = useState(0)
  const [percentageSale, setPercentageSale] = useState(0);

  useEffect(() =>{
    async function fetchData() {
        try{
          const quantity = await getAllRegistredNumber();
          setQuantityProperty(quantity);
          
          const percentageForSale = await getPercentageForSale();
          setPercentageSale(percentageForSale)
        }catch(e){
          console.log(e);
        }
        
    }
    fetchData()
  }, [])

  const [userStats] = useState({
    proprietarios: 2,
    usuariosComuns: 4,
    bloqueados: 0
  });

  const totalUsers = userStats.proprietarios + userStats.usuariosComuns + userStats.bloqueados;
  const percentageProprietors = Math.round((userStats.proprietarios / totalUsers) * 100);
  const percentageCustomers = Math.round((userStats.usuariosComuns / totalUsers) * 100);
  const percentageBlocked = Math.round((userStats.bloqueados / totalUsers) * 100);

  const horizontalLabels = [
    `${percentageSale}% VENDA`,
    `${percentageCustomers}%LOCAÇÃO`,
    `${percentageBlocked}%ARQUIVADOS`
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
            <p className="users-big-number">{quantityProperty}</p>
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
                values={novosImoveisData}
                title="Novos Imóveis por Mês"
                scaleType="default"
              />
            </div>
            <div className="users-data-box">
              <h3 className="users-big-number">7</h3>
              <p className="users-small-text">
                58% usuários comuns sem propriedade á venda
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row-boxes">
            <div className="info-data-column">
              <p className="info-textTitle">COMPARTILHADOS</p>
              <div className="info-data-box">
                <h3 className="info-big-number">4</h3>
                <p className="info-small-text">
                  25% compartilhados pelo Whatsapp
                </p>
              </div>
            </div>
            <div className="info-data-column">
              <p className="info-textTitle">FAVORITADOS</p>
              <div className="info-data-box">
                <h3 className="info-big-number">6</h3>
                <p className="info-small-text">
                  50% imóveis de venda ou locação para moradia
                </p>
              </div>
            </div>
            <div className="info-data-column">
              <p className="info-textTitle">GERARAM CHAT</p>
              <div className="info-data-box">
                <h3 className="info-big-number">2</h3>
                <p className="info-small-text">0% conversados por Whatsapp</p>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}