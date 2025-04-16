import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import Footer from "@/app/components/Footer/Footer";
import SideTitle from "@/app/components/NonInteractable/SideTitle";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import AuthGuard from "@/app/context/AuthGuard";

export default function page() {
  return (
    <>
    <AuthGuard requiredRole="ROLE_ADMIN">
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
              <h3 className="users-big-number">421</h3>
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
      </AuthGuard>
    </>
  );
}
