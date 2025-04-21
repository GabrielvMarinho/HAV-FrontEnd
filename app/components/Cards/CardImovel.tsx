"use client";
import { useState, useEffect } from "react";
import searchPropertyByIdSpecific from "@/app/apiCalls/Property/searchPropertyByIdSpecific";
import DefaultImage from "/Image/fotoSemPropriedade.png";

import Bed from "../IconsTSX/Bed";
import Sofa from "../IconsTSX/Sofa";
import Shower from "../IconsTSX/Shower";
import Button from "../Inputs/Button";
import StarFavorite from "../Inputs/StarFavorite";
import MarcadorDeMapa from "../IconsTSX/MarcadorDeMapa";
import "./css/style.css";
import { useRouter } from "next/navigation";
import TapeCardImovel from "../Information/TapeCardImovel";
import CategoryCardImovel from "../Information/CategoryCardImovel";
import globalDatabaseNameConverter from "@/app/globalDatabaseNameConverter";
import Rule from "../IconsTSX/Rule";
import decodeDoubleBase64 from "@/app/utils/decodeDoubleBase64";

interface CardImovelProps {
    obj: PropertySpecificCard | null;
    idUser?: number;
}

export default function CardImovel({ obj, idUser }: CardImovelProps) {
    console.log("_+_+_+_+_+_+", obj.mainImage)
    console.log("Raw image data:", obj?.mainImage != null);





    const router = useRouter();
    function goToSpecificProperty(id: number | undefined) {
        console.log(id)
        router.push (`/property/${id}`)
    }

    return (
        <div style={{ width: "269px", display: "flex", flexDirection: "column" }}>
            <section style={{ position: "relative", display: "inline-block" }}>
               
                <div
                    style={{
                        position: "absolute",
                        top: "10px", 
                        left: "10px", 
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "24px",
                        width: "244px",
                        
                        zIndex: 2, 
                    }}
                >
                    <div style={{ marginLeft: "-26px" }}>
                        <TapeCardImovel text={obj.propertyStatus} />
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <CategoryCardImovel text={obj.purpose} />
                    </div>
                </div>   
                {obj?.mainImage ?
                        <img
                        src={`${decodeDoubleBase64(obj.mainImage)}`} 
                        alt="imagem da casa"
                        style={{ borderTopLeftRadius:"10px", borderTopRightRadius:"10px", display: "block", width: "100%", height: "auto" }}/>
                        :
                        <img
                        src={"/Image/fotoSemPropriedade.png"}
                        alt="imagem da casa"
                        style={{ borderTopLeftRadius:"10px", borderTopRightRadius:"10px", display: "block", width: "100%", height: "auto" }}/>
                    }
                    
                    
            </section>

            <section className="cardImovelSection" style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)", borderRadius: "0 0 10px 10px" }}>
                <div>
                    <p className="bairro">{globalDatabaseNameConverter[obj?.neighborhood]}</p>
                    <p className="cidade">{globalDatabaseNameConverter[obj?.city]}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "35px" }}>
                    <div >
                        {obj?.promotionalPrice > 0 ?
                            <p className="valorImovelPromotional">
                                R${obj?.promotionalPrice}
                                {obj?.purpose === "locacao" && <span style={{all:"unset"}} className="rentingText">/mês</span>}
                            </p>:""
                        }
                        <p className="valorImovel">
                            R${obj?.price}
                            {obj?.purpose === "locacao" && <span className="rentingText">/mês</span>}
                        </p>
                    </div>
                    <div className="infoImovel">
                        {obj?.propertyType=="terreno"?
                            <>
                            <Rule width={18} height={18} color="var(--text-white)" />
                            <p>{obj?.area}m²</p>
                            </>
                            :
                            <>
                            <Bed width={18} height={18} color="var(--text-white)" />
                            <p>{obj?.bedRoom}</p>
                            <Sofa width={18} height={18} color="var(--text-white)" />
                            <p>{obj?.livingRoom}</p>
                            <Shower width={18} height={18} color="var(--text-white)" />
                            <p>{obj?.bathRoom}</p>
                        </>
                        }
                        
                    </div>
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)"
                        hover="lightHover" type="button" onClick={() => goToSpecificProperty(obj?.id)} />
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <StarFavorite idUser={idUser} idProperty={obj?.id} width={27} height={27} color="#FFFF" selected={false} />
                        <MarcadorDeMapa width={22} height={22} color="" />
                    </div>
                </article>
            </section>
        </div>
    );
}