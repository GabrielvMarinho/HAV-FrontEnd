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
    const [property, setProperty] = useState<PropertySpecificCard | null>(obj);

    useEffect(() => {
        async function fetchProperty() {
            if (!obj?.id) return;

            try {
                const response = await searchPropertyByIdSpecific(obj.id);
                console.log("Resposta da API:", response);
                setProperty(response); 
                console.log(obj);
            } catch (error) {
                console.log("Erro ao buscar propriedade:", error);
            }
        }
        
        if (obj?.id) {
            fetchProperty();
        }
    }, [obj?.id]);  

    const defaultProperty: PropertySpecific = {
        id: 1,  // Forçar um id válido para evitar erros
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
        purpose: "Desconhecido",
        price: 0,
        additionals: [],
        propertyCode: "0000",
        promotionalPrice: 0,
        actualPrice: 0,
        taxes: 0,
        propertyDescription: "Descrição não disponível",
        propertyType: "Desconhecido",
        realtorPropertySpecific: [],
    };

    // Usando os dados da propriedade ou o valor padrão
    const finalProperty = property ? property : defaultProperty;

    return (
        <div style={{ width: "269px", display: "flex", flexDirection: "column" }}>
            <section style={{ position: "relative", display: "inline-block" }}>
                <Image src={ImageCasa} alt="imagem da casa" style={{ display: "block", width: "100%", height: "auto" }} />
            </section>

            <section className="cardImovelSection" style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)", borderRadius: "0 0 10px 10px" }}>
                <div>
                    <p className="bairro">{finalProperty.address.neighborhood}</p>
                    <p className="cidade">{finalProperty.address.city}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p className="valorImovel">
                        R${finalProperty.price}
                        {finalProperty.purpose === "locacao" && <span className="rentingText">/mês</span>}
                    </p>
                    <div className="infoImovel">
                        <Bed width={18} height={18} color="" />
                        <p>{finalProperty.propertyFeature.bedRoom}</p>
                        <Sofa width={18} height={18} color="" />
                        <p>{finalProperty.propertyFeature.livingRoom}</p>
                        <Shower width={18} height={18} color="" />
                        <p>{finalProperty.propertyFeature.bathRoom}</p>
                    </div>
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)" hover="lightHover" type="button" />
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <StarFavorite idUser={idUser} idProperty={finalProperty.id} width={27} height={27} color="#FFFF" selected={false} />
                        <MarcadorDeMapa width={22} height={22} color="" />
                    </div>
                </article>
            </section>
        </div>
    );
}
