
"use client"
import { useRouter } from "next/navigation";
import ArrowBack from "../IconsTSX/ArrowBack";
import "./css/style.css"; 
import StarFavorite from "./StarFavorite";

export default function SearchFavorite(){
    const router = useRouter();

    const BackAPoint = function(){
        router.back(); 
    }
    return (
        <>
        <div className="searchResult" style={{display: "flex", flexDirection:"row"}}>
            <div onClick={BackAPoint} style={{display: "flex", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
                <StarFavorite width={45} height={45} color="var(--box-mid-dark-red)" selected={false} />
            </div>

            <div >
                <div style={{display: "flex", gap:"10px", alignItems:"center", color: "var(--box-mid-dark-red)"}}>
                    <p>MEUS</p>
                </div>
                <h2>FAVORITOS</h2>
                {/* a linha está quebrando  */}
                <div className="searchResultLine"></div>
            </div>
        </div>
        </>
    )
}