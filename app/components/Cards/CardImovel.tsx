"use client"
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
import TapeCardImovel from "../Information/TapeCardImovel";
import CategoryCardImovel from "../Information/CategoryCardImovel";
import "./css/style.css";

export default function CardImovel(props:{ obj: PropertySpecific | null }) {
    
    const [property, setProperty] = useState<PropertySpecific | null>(props.obj);

    useEffect(() => {
                async function fetchProperty() {
            if (!props.obj?.id) return; // Se não tiver um ID válido, não faz a requisição

            try {
                const response = await searchPropertyByIdSpecific(props.obj?.id);
                console.log("Resposta da API:", response);
                setProperty(response); // Atualiza o estado com os dados reais
            } catch (error) {
                console.log("Erro ao buscar propriedade:", error);
            }
        }

        fetchProperty();
    }, [props.obj?.id]);

    const defaultProperty: PropertySpecific = {
        id: 0,
        address: {
            neighborhood: "Não informado",
            city: "Não informado",
            state: "Não informado",
            street: "Não informado",
        },
        propertyFeature: {
            bedRoom: 0,
            bathRoom: 0,
            garageSpace: 0,
            livingRoom: 0,
            areaProperty: 0,
            isFurnished: false,
        },
        propertyStatus: "Indisponível",
        additionals: [],
        propertyCode: "N/A",
        promotionalPrice: 0,
        actualPrice: 0,
        taxes: 0,
        purpose: "Desconhecido",
        propertyDescription: "Descrição não disponível",
        propertyType: "Desconhecido",
        realtorPropertySpecific: [],
        price: 0,
    };

    const finalProperty = property ?? defaultProperty; // Usa `defaultProperty` caso `property` seja null

    return (
        <div style={{ width: "269px", display: "flex", flexDirection: "column" }}>
            <section style={{ position: "relative", display: "inline-block" }}>
                <div style={{
                    position: "absolute",
                    top: "5px",
                    left: "-16px",
                    display: "flex",
                    alignItems: "center",
                }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "22px" }}>
                        <TapeCardImovel text={finalProperty.propertyStatus} />
                        <CategoryCardImovel text={finalProperty.purpose} />
                    </div>
                </div>

                <Image src={ImageCasa} alt="imagem da casa" style={{ display: "block", width: "100%", height: "auto" }} />
            </section>

            <section className="cardImovelSection" style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)", height: "fit-content", borderRadius: "0 0 10px 10px" }}>
                <div style={{ display: "flex", textAlign: "left", flexDirection: "column" }}>
                    <p className="bairro">{finalProperty.address.neighborhood}</p>
                    <p className="cidade">{finalProperty.address.city}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <p className="valorImovel">R${finalProperty.price}{finalProperty.purpose === "locacao" && <span className="rentingText">/mês</span>}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="infoImovel">
                            <Bed width={18} height={18} color="" />
                            <p className="infoQuantity">{finalProperty.propertyFeature.bedRoom}</p>
                            <Sofa width={18} height={18} color="" />
                            <p className="infoQuantity">{finalProperty.propertyFeature.livingRoom}</p>
                            <Shower width={18} height={18} color="" />
                            <p className="infoQuantity">{finalProperty.propertyFeature.bathRoom}</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
                <article style={{ display: "flex", flexDirection: "row", gap: "55px", alignItems: "center" }}>
                    <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)" hover="lightHover" />
                    <div style={{ display: "flex", flexDirection: "row", gap: "7.92px", opacity: 0.6, alignItems: "center" }}>
                        <StarFavorite width={27} height={27} color="#FFFF" selected={false} />
                        <MarcadorDeMapa width={22} height={22} color="" />
                    </div>
                </article>
            </section>
        </div>
    );
}
