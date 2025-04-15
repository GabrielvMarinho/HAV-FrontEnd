"use client"
import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import getAllUsersNumber from "@/app/apiCalls/User/getAllRegistredNumber";
import { useState, useEffect } from "react";
import getQuantityProprietor from "@/app/apiCalls/Proprietor/getQuantityProprietor"; {/*Funcionando */ }
import getPercentageProprietors from "@/app/apiCalls/Proprietor/getPercentageProprietors"; {/*Funcionando */ }
import getQuantityCustomer from "@/app/apiCalls/Customer/getQuantityCustomer"; {/*Funcionando */ }
import getPercentageCustomer from "@/app/apiCalls/Customer/getPercentageCustomer"; {/*Funcionando */ }
import HorizontalBarChart from "@/app/components/BarChart/HorizontalBarChart";
import VerticalBarChart from "@/app/components/BarChart/VerticalBarChart";


export default function page() {

  const [allUsersNumber, setAllUsersNumber] = useState(0);
  const [allProprietors, setAllProprietors] = useState(0);
  const [percentageProprietors, setPercentageProprietors] = useState(0);
  const [allCustomers, setAllCustomers] = useState(0);
  const [PercentageCustomer, setPercentageCustomer] = useState(0);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const [
          allUsersNumber,
          allProprietors,
          percentageProprietors,
          allCustomers,
          PercentageCustomer
        ] =
          await Promise.all([
            getAllUsersNumber(),
            getQuantityProprietor(),
            getPercentageProprietors(),
            getQuantityCustomer(),
            getPercentageCustomer()
          ])
          setAllUsersNumber(allUsersNumber),
          setAllProprietors(allProprietors),
          setPercentageProprietors(percentageProprietors),
          setAllCustomers(allCustomers),
          setPercentageCustomer(PercentageCustomer)
      } catch (e) {
        console.log(e, "Erro na api");
      }
    }
    fetchData()
  }, [])

  const labels = [
    `${percentageProprietors}% PROPRIETÁRIOS`,
    `${PercentageCustomer}% USUÁRIOS COMUNS`,
    `${"a fazer (bloqueados)"}% BLOQUEADOS`
  ];

  const data = [allProprietors, allCustomers]

  const barColors = ["#B23F52"]

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
          <p>USUÁRIOS</p>
        </div>
        <div className="users-data-row">
          <div className="users-data-box">
            <h3 className="users-big-number">{allUsersNumber}</h3>
            <p className="users-small-text">Desde 2025</p>
          </div>
          <div className="users-graph-container">
          <div className="placeholder-graph">
          <HorizontalBarChart labels={labels} data={data} backGroundColors={barColors} />
          </div>
          </div>
        </div>
      </section>

      <section className="users-section">
        <div className="data-TitleRight">
          <SideTitle tag={"h2"} text={"DADOS RECENTES"} />
        </div>
        <div className="reports-graphTitleRight">
          <p>NOVOS USUÁRIOS</p>
        </div>
        <div className="users-data-row">
          <div className="users-graph-container">
            <div className="placeholder-graph">
            <VerticalBarChart labels={labels} data={data} backGroundColors={barColors} />
            </div>
          </div>
          <div className="users-data-box">
            <h3 className="users-big-number">123</h3>
            <p className="users-small-text">
              65% usuários comuns sem propriedade á venda
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
            <VerticalBarChart labels={labels} data={data} backGroundColors={barColors} />
            </div>
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
