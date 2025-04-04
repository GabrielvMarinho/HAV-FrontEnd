"use client"
import Title from "../../components/NonInteractable/Title";
import NavBarEstatisticaEAnalise from "../../components/Header/NavBarEstatisticaEAnalise"
import Subtitle from "../../components/NonInteractable/Subtitle";
import { useEffect, useState } from "react";
import "./css/style.css"

export default function RelatorioEAnalise(props: {totalProperties: number}) {

    const [totalProperties, setTotalProperties] = useState();

    useEffect(() => {

        const fetchAllProperties = async () => {
            
            try{
                const response = await fetch("http://localhost:9090/property/getAll");
                if(!response.ok) throw new Error("Erro ao buscar favoritos")
                const data = await response.json();
                setTotalProperties(data);
                console.log("Número de propriedades: ", data);
            }catch(e){
                console.log(e);
            }
        }
        fetchAllProperties();
    },[])

    return (
        <>

            <Title tag="h1" text="Estatísticas e análises" />
            <NavBarEstatisticaEAnalise />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "490px" }}>
                <Subtitle text="dados totais" lineDirection="left" /> {/**ainda não consegui alinhar a barra a esquerda */}
                <p className="exportdatas">EXPORTAR DADOS</p>
            </div>
            <div className="boxAllRegistredProperties">
                <p>{totalProperties}</p>
            </div>

        </>
    );
}