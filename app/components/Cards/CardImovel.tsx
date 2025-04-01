"use client";

import Image from "next/image";
import ImageCasa from "@/public/Image/ImagemCasa.png";
import Bed from "../IconsTSX/Bed";
import Sofa from "../IconsTSX/Sofa";
import Shower from "../IconsTSX/Shower";
import Button from "../Inputs/Button";
import StarFavorite from "../Inputs/StarFavorite";
import MarcadorDeMapa from "../IconsTSX/MarcadorDeMapa";
import { useEffect, useState } from "react";
import "./css/style.css";
import { useRouter } from "next/navigation";


export default function CardImovel({ obj, idUser }: CardImovelProps) {
    const router = useRouter();
    
    function goToSpecificProperty(id: number | undefined) {
        console.log(id)
        router.push(`property/${id}`)
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
                    gap: "20px",
                    zIndex: 2, 
                }}
            >
                <div style={{ marginLeft: "-26px" }}>
                    <TapeCardImovel text={property?.propertyStatus || "Não informado"} />
                </div>
                <div style={{ marginTop: "15px" }}>
                    <CategoryCardImovel text={property?.purpose || "Sem dados"} />
                </div>
            </div>

          
            <Image
                src={ImageCasa}
                alt="imagem da casa"
                style={{ display: "block", width: "100%", height: "auto" }}
            />
        </section>


        <section className="cardImovelSection" style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)", borderRadius: "0 0 10px 10px" }}>
            <div>
                <p className="bairro">{property?.address.neighborhood || "Não informado"}</p>
                <p className="cidade">{property?.address.city || "Não informado"}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p className="valorImovel">
                    R${property?.price}
                    {property?.purpose === "locacao" && <span className="rentingText">/mês</span>}
                </p>
                <div className="infoImovel">
                    <Bed width={18} height={18} color="" />
                    <p>{property?.propertyFeatures.bedRoom || 0}</p>
                    <Sofa width={18} height={18} color="" />
                    <p>{property?.propertyFeatures.livingRoom || 0}</p>
                    <Shower width={18} height={18} color="" />
                    <p>{property?.propertyFeatures.bathRoom || 0}</p>
                </div>
            </div>
            <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
            <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)" hover="lightHover" type="button" />
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <StarFavorite idUser={props.idUser} idProperty={property?.id} width={27} height={27} color="#FFFF" selected={false} />
                    <MarcadorDeMapa width={22} height={22} color="" />
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)" 
                    hover="lightHover" type="button" onClick={() => goToSpecificProperty(obj?.id)} />
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <StarFavorite idUser={props.idUser} idProperty={props.obj?.id} width={27} height={27} color="#FFFF" selected={false} />
                        <MarcadorDeMapa width={22} height={22} color="" />
                    </div>
                </article>
            </section>
        </div>
    );
}
