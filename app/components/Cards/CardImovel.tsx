"use client";
import { useState, useEffect } from "react";
import searchPropertyByIdSpecific from "@/app/apiCalls/Property/searchPropertyByIdSpecific";
import Image from "next/image";
import ImageCasa from "@/public/Image/ImagemCasa.png";
import Bed from "../IconsTSX/Bed";
import Sofa from "../IconsTSX/Sofa";
import Shower from "../IconsTSX/Shower";
import Button from "../Inputs/Button";
import StarFavorite from "../Inputs/StarFavorite";
import MarcadorDeMapa from "../IconsTSX/MarcadorDeMapa";
import "./css/style.css";

interface CardImovelProps {
    obj: PropertySpecificCard | null;
    idUser: number;
}

export default function CardImovel({ obj, idUser }: CardImovelProps) {

    console.log(obj)

    
    return (
        <div style={{ width: "269px", display: "flex", flexDirection: "column" }}>
            <section style={{ position: "relative", display: "inline-block" }}>
                <Image src={ImageCasa} alt="imagem da casa" style={{ display: "block", width: "100%", height: "auto" }} />
            </section>

            <section className="cardImovelSection" style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)", borderRadius: "0 0 10px 10px" }}>
                <div>
                    <p className="bairro">{obj?.neighborhood}</p>
                    <p className="cidade">{obj?.city}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p className="valorImovel">
                        R${obj?.price}
                        {obj?.purpose === "locacao" && <span className="rentingText">/mês</span>}
                    </p>
                    <div className="infoImovel">
                        <Bed width={18} height={18} color="" />
                        <p>{obj?.bedRoom}</p>
                        <Sofa width={18} height={18} color="" />
                        <p>{obj?.livingRoom}</p>
                        <Shower width={18} height={18} color="" />
                        <p>{obj?.bathRoom}</p>
                    </div>
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)" hover="lightHover" type="button" />
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <StarFavorite idUser={idUser} idProperty={obj?.id} width={27} height={27} color="#FFFF" selected={false} />
                        <MarcadorDeMapa width={22} height={22} color="" />
                    </div>
                </article>
            </section>
        </div>
    );
}
