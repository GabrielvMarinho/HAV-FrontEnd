import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "../style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import Footer from "@/app/components/Footer/Footer";
import SideTitle from "@/app/components/NonInteractable/SideTitle";

export default function page() {
  return (
    <>
      <HeaderAdm />
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
            <h3 className="users-big-number">3.2 MIL</h3>
            <p className="users-small-text">Desde 2025</p>
          </div>
          <div className="users-graph-container">
            <div className="placeholder-graph">Gráfico</div>
          </div>
        </div>
      </section>

      <section>
        <div className="sideT">
          <SideTitle tag={"h1"} text={"DADOS RECENTES"} />
        </div>
        <div className="users-data-row">
          <div className="users-data-box">
            <h3 className="users-big-number">3.2 MIL</h3>
            <p className="users-small-text">Desde 2025</p>
          </div>
          <div className="users-graph-container">
            <div className="placeholder-graph">Gráfico</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
