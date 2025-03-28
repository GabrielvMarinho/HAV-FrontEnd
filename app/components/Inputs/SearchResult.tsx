
"use client"
import { useRouter } from "next/navigation";
import ArrowBack from "../IconsTSX/ArrowBack";
import "./css/style.css"; 

export default function SearchFavorite(props :{typeSearch:string}){
    const router = useRouter();

    const BackAPoint = function(){
        router.back(); 
    }
    return (
        <>
        <div className="searchResult" style={{display: "flex", flexDirection:"row"}}>
            <div onClick={BackAPoint} style={{display: "flex", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
                <ArrowBack width={35} height={35} color="var(--text--mid-dark-red)"/>    
            </div>

            <div>
                <h2>RESULTADOS</h2>
                    <div style={{display: "flex", gap:"10px", alignItems:"center"}}>
                        <p>da sua pesquisa</p>
                        <h3>{props.typeSearch === "venda"?"VENDA":props.typeSearch === "locacao"?"LOCAÇÃO":""}</h3>
                    </div>
                <div className="searchResultLine"></div>
            </div>
        </div>
        </>
    )
}