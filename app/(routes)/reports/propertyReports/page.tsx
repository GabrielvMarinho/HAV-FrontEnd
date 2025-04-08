import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "../style/style.css"; 
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import Footer from "@/app/components/Footer/Footer";

export default function page() {
  return (
    <>
      <HeaderAdm />
      <Title tag={"h1"} text={"ESTATÍSTICAS E ANÁLISES"} />
      <NavBarAdm options={NavBarPath.reports} />

      {/* Container principal para centralizar o conteúdo */}
      <div className="reports-container">
        {/* Container para o conteúdo com o texto */}
        <div className="reports-title">
          <h1>DADOS TOTAIS</h1>
          <div className="reports-subtitle">
            <p>EXPORTAR DADOS</p>
          </div>
        </div>

        <div>
          <p>USUÁRIOS</p>
          <div>

            <div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
