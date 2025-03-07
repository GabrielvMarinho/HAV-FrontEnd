"use client"
import HeaderAdm from "../../components/Header/HeaderAdm";
import Title from "../../components/NonInteractable/Title";
import NavBarEstatisticaEAnalise from "../../components/Header/NavBarEstatisticaEAnalise"
import Subtitle from "../../components/NonInteractable/Subtitle";
<canvas id="grafico"></canvas>

export default function RelatorioEAnalise() {

    return (
        <>
            <HeaderAdm/>
            <Title tag="h1" text="Estatísticas e análises" />
            <NavBarEstatisticaEAnalise />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "490px" }}>
                <Subtitle text="dados totais" lineDirection="left" /> {/**ainda não consegui alinhar a barra a esquerda */}
                <p className="exportdatas">EXPORTAR DADOS</p>
            </div>

        </>
    );
}