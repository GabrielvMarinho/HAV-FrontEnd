"use client"
import "../css/style.css"
import RealtorAssociated from "@/app/components/Information/RealtorAssociated";
import PropertyPageDatasAdm from "@/app/components/Information/PropertyPageDatas-Adm";
import PropertyPrice from "@/app/components/NonInteractable/PropertyPrice";
import OtherEnvironmentsProperty from "@/app/components/Information/OtherEnvironmentsProperty";
import Button from "@/app/components/Inputs/Button";
import Cubes from "@/app/components/IconsTSX/Cubes";
import Gear from "@/app/components/IconsTSX/Gear";
import Balanca from "@/app/components/IconsTSX/Balanca";
import InterestPointsPropertySpecific from "@/app/components/NonInteractable/InterestPoints";
import DescriptionProperty from "@/app/components/Information/DescriptionProperty";
import HorizontalPropertySpecific from "@/app/components/NonInteractable/HorizontalTitlePropertySpecific";
import Title from "@/app/components/NonInteractable/Title";
import SliderContentOfThree from "@/app/components/Information/SliderContentOfThree";
import RealterAssociatedVertical from "@/app/components/Information/RealterAssociatedVertical";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import searchPropertyByIdSpecific from "@/app/apiCalls/Property/searchPropertyByIdSpecific";
import NewScheduleModal from "@/app/components/Forms/NewScheduleModal";
import GetSimilarThreeByPrice from "@/app/apiCalls/Property/GetSimilarThreeByPrice";
import "@/app/GeneralPages.css"
import "@/app/variables.css"
import "@/public/Image/css/style.css"

export default function PropertySpecific(props: { obj: PropertySpecific; }) {

    const { id } = useParams(); // Pegando o ID da URL
    const propertyId = props.obj?.id ?? id; // Prioriza props.obj.id, mas usa o ID da URL se necessário
    const [property, setProperty] = useState<PropertySpecific | null>(null);

    const formatProperty = (apiData: any): PropertySpecific => ({
        ...apiData, //para manter os valores da api
        address: {
            ...apiData.address, // Mantém todos os dados que já existem no address
            neighborhood: apiData.address?.neighborhood ?? "Não informado",
            city: apiData.address?.city ?? "Não informado",
            state: apiData.address?.state ?? "Não informado",
            street: apiData.address?.street ?? "Não informado"
        },
        propertyFeature: {
            ...apiData.propertyFeature, // Mantém todos os dados que já existem no propertyFeature
            bedRoom: apiData.propertyFeature?.bedRoom ?? "Não informado",
            bathRoom: apiData.propertyFeature?.bathRoom ?? "Não informado",
            garageSpace: apiData.propertyFeature?.garageSpace ?? "Não informado",
            livingRoom: apiData.propertyFeature?.livingRoom ?? "Não informado",
            areaProperty: apiData.propertyFeature?.areaProperty ?? "Não informado"
        },
        additional: {
            ...apiData.additional,
            additional: apiData.additional?.name ?? "Não informado"
        },
    });


    useEffect(() => {
        async function fetchProperty() {
            if (!propertyId) return;

            try {
                const response = await searchPropertyByIdSpecific(propertyId);
                console.log("Resposta completa da API:", response);

                const formattedProperty = formatProperty(response);
                console.log("Propriedade formatada:", formattedProperty);

                setProperty(formattedProperty);
            } catch (error) {
                console.log("Erro ao buscar propriedade:", error);
            }
        }

        fetchProperty();
    }, [propertyId]);


    const [similarProperties, setSimilarProperties] = useState<PropertySpecificCard[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetSimilarThreeByPrice();
            setSimilarProperties(data);
        }
        fetchData()
    }, [])

    if (!property) {
        return <p>Carregando...</p>
    }

    

    return (
        <>
            <div style={{ width: "var(--width-page)" }}>
                <article className="articleFirstContent">
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ width: "450px", height: "462px", backgroundColor: "black" }}></div>
                        <div style={{ display: "flex", flexDirection: "row", gap: "110px" }}>
                            <div className="buttonIconDiv">
                                <Button
                                    type="button"
                                    size="large"
                                    text="vista 3d"
                                    hover="darkHover"
                                    color=""
                                    background="" />
                                <Cubes width={30} height={30} color="var(--button-color)" />
                            </div>
                            <div className="buttonIconDiv">
                                <Gear height={30} width={30} color="var(--button-color)" />
                                <Button
                                    type="button"
                                    size="large"
                                    text="gerenciar"
                                    hover="darkHover"
                                    color=""
                                    background="" />

                            </div>
                        </div>
                        <div className="buttonIconDiv">

                            <Button
                                type="button"
                                size="large"
                                text="Comparação"
                                hover="darkHover"
                                color=""
                                background="" />
                            <Balanca height={30} width={30} color="var(--button-color)" />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <PropertyPageDatasAdm
                            obj={{
                                propertyType: property.propertyType,
                                propertyCode: property.propertyCode,
                                propertyFeature: property.propertyFeature,
                                address: property.address,
                                purpose: property.purpose
                            }}
                        />

                        <PropertyPrice obj={{
                            purpose: property.purpose,
                            ActualPrice: property.price,
                            taxes: property.taxes,
                            PromotionalPrice: props.obj?.promotionalPrice
                        }} />
                        <RealtorAssociated objPropertyList={{ realtorPropertySpecific: property?.realtorPropertySpecific ?? [] }} WhatsappLink="adad" />
                    </div>

                </article>
                <NewScheduleModal propertyId={String(propertyId)} />

                <article className="enviroments-interestPoint">
                    <OtherEnvironmentsProperty obj={{ additionals: property.additionals }} />
                    <InterestPointsPropertySpecific text="pontos de interesse" />
                </article>
                <DescriptionProperty obj={{ propertyDescription: property.propertyDescription }} />
                <section className="sectionPriceProperty">
                    <HorizontalPropertySpecific />
                    <div className="containerGraphic"></div>
                </section>
                <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "115px" }}>
                    <Title text="imóveis semelhantes" tag="h1" />
                </div>
                <SliderContentOfThree items={
                    similarProperties
                } />
            </div>
            
            <div style={{ margin: "200px 0 100px 0" }}>
                <RealterAssociatedVertical objPropertyList={{ realtorPropertySpecific: property?.realtorPropertySpecific ?? [] }}
                    WhatsappLink="aaadw"
                    InstagramLink="https://www.instagram.com/accounts/login/?next=%2Fnathanj.oao%2F&source=omni_redirect" />
            </div>
        </>
    );
}
