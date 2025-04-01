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
import FavoriteProperty from "@/app/apiCalls/Property/FavoriteProperty";
import TapeCardImovel from "../Information/TapeCardImovel";
import CategoryCardImovel from "../Information/CategoryCardImovel";


export default function CardImovel(props: { obj: PropertyCard; idUser: number; }) {

    const propertyId = props.obj?.id;

    const [property, setProperty] = useState<PropertyCard | null>(null);


    useEffect(() => {
        async function fetchProperty() {
            if (!props.obj?.id) return;

            try {
                const response = await FavoriteProperty(props.obj.id, props.idUser);
                if (!response.ok) {
                    throw new Error(`Erro na API: ${response.status}`);
                }
                const data = await response.json();
                setProperty(data)
                console.log("Resposta da API:", data);
            } catch (error) {
                console.log("Erro ao buscar propriedade:", error);
            }
        }

        fetchProperty();
    }, [props.obj?.id]);


    
    return (
        <div style={{ width: "269px", display: "flex", flexDirection: "column" }}>

            <section style={{ position: "relative", display: "inline-block" }}>
                {/* Container para os elementos sobrepostos */}
                <div
                    style={{
                        position: "absolute",
                        top: "10px", // Ajuste conforme necessário
                        left: "10px", // Ajuste conforme necessário
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "20px",
                        zIndex: 2, // Garante que fique sobre a imagem
                    }}
                >
                    <div style={{ marginLeft: "-26px" }}>
                        <TapeCardImovel text={props.obj?.propertyStatus || "Não informado"} />
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <CategoryCardImovel text={props.obj?.purpose || "Sem dados"} />
                    </div>
                </div>

                {/* Imagem */}
                <Image
                    src={ImageCasa}
                    alt="imagem da casa"
                    style={{ display: "block", width: "100%", height: "auto" }}
                />
            </section>


            <section className="cardImovelSection" style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)", borderRadius: "0 0 10px 10px" }}>
                <div>
                    <p className="bairro">{props.obj?.address.neighborhood || "Não informado"}</p>
                    <p className="cidade">{props.obj?.address.city || "Não informado"}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p className="valorImovel">
                        R${props.obj?.price}
                        {props.obj?.purpose === "locacao" && <span className="rentingText">/mês</span>}
                    </p>
                    <div className="infoImovel">
                        <Bed width={18} height={18} color="" />
                        <p>{props.obj?.propertyFeatures.bedRoom || 0}</p>
                        <Sofa width={18} height={18} color="" />
                        <p>{props.obj?.propertyFeatures.livingRoom || 0}</p>
                        <Shower width={18} height={18} color="" />
                        <p>{props.obj?.propertyFeatures.bathRoom || 0}</p>
                    </div>
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)" hover="lightHover" type="button" />
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <StarFavorite idUser={props.idUser} idProperty={props.obj?.id} width={27} height={27} color="#FFFF" selected={false} />
                        <MarcadorDeMapa width={22} height={22} color="" />
                    </div>
                </article>
            </section>
        </div>
    );
}
