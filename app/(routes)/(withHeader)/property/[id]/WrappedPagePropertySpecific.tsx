"use client"
import "../css/style.css"
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
import ButtonUploadPhotos from "@/app/components/Inputs/buttonUploadPhotos";
import ShowPhotos from "@/app/components/Information/ShowPhotos";
import ProprietorDetails from "@/app/components/Information/ProprietorAssociated";
import ProprietorAssociated from "@/app/components/Information/ProprietorAssociated";
import MapSearchResult from "@/app/components/Maps/MapSearchResult";
import { createChat } from "@/app/redux/Chat/action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer/Footer";

export default function WrappedPagePropertySpecific(props: { obj?: PropertySpecific; user: any }) {

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
            street: apiData.address?.street ?? "Não informado",
            propertyNumber: apiData.address?.propertyNumber ?? "Não informado"

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
                console.log("repos", response)
                const formattedProperty = formatProperty(response);

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
        return <p style={{ marginBottom: "100vh" }}>Carregando...</p>
    }
    console.log(props.user)

    const dispatch = useDispatch();
    const router = useRouter();

    const handleAccessChat = async () => {
        console.log("Botão clicado");

        const token = localStorage.getItem("token");
        const realtorId = property.realtorPropertySpecific[0]?.id;

        if (!realtorId) {
            console.warn("Realtor ID não encontrado.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:9090/api/chats/existing?userId2=${realtorId}`, {
                method: "GET",
                credentials: "include", // JWT via cookie
            });

            let chat;

            if (res.ok) {
                try {
                    chat = await res.json();
                    console.log("Chat existente:", chat);

                    if (!chat) {
                        console.log("Chat não encontrado na resposta, criando novo chat...");
                        const chatData = {
                            token,
                            data: { userId: realtorId },
                        };

                        const created = await dispatch(createChat(chatData));
                        chat = created?.payload || null;
                    }

                } catch (jsonError) {
                    console.error("Erro ao converter resposta existente em JSON:", jsonError);
                }
            } else {
                console.log("Erro ao buscar chat, tentando criar novo...");
                const chatData = {
                    token,
                    data: { userId: realtorId },
                };

                const created = await dispatch(createChat(chatData));
                chat = created?.payload || null;
            }

            if (chat) {
                localStorage.setItem("selectedChatId", chat.id);
                router.push("/chat");
            }

        } catch (error) {
            console.error("Erro ao acessar ou criar chat:", error);
        }
    };
    console.log("property ", property)

    return (
        <>

            <div style={{ marginInline: "auto", maxWidth: "var(--width-page)" }}>
                <article className="articleFirstContent">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {property.imagesProperty.length > 1 ?
                            <ShowPhotos
                                name={"images"}
                                initialImages={
                                    property.imagesProperty
                                }
                            />
                            :
                            <img
                                style={{ width: "33vw", height: "28vw", marginBottom: "3.5vw" }}
                                src="/Image/fotoSemPropriedade.png"
                            ></img>
                        }

                        <div style={{ display: "flex", flexDirection: "row", gap: "110px", marginTop: "-2.5vw" }}>
                            {/* <div className="buttonIconDiv">
                                <Button
                                    type="button"
                                    size="large"
                                    text="vista 3d"
                                    hover="darkHover"
                                    color=""
                                    background="" />
                                <Cubes width={30} height={30} color="var(--button-color)" />
                            </div> */}
                            {props.user.role == "ROLE_EDITOR" || props.user.role == "ROLE_ADMIN" ?

                                <div className="buttonIconDiv">
                                    <Button
                                        onClick={() => { window.location.href = "/manage/properties/edit/4" }}
                                        type="button"
                                        size="large"
                                        text="gerenciar"
                                        hover="darkHover"
                                        color=""
                                        background="" />
                                    <Gear height={30} width={30} color="var(--button-color)" />
                                </div>
                                : ""

                            }

                        </div>
                        {/* <div className="buttonIconDiv">

                            <Button
                                type="button"
                                size="large"
                                text="Comparação"
                                hover="darkHover"
                                color=""
                                background="" />
                            <Balanca height={30} width={30} color="var(--button-color)" />
                        </div> */}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "15px" }}>
                        <PropertyPageDatasAdm
                            usuario={
                                1
                            }
                            obj={{
                                propertyId: propertyId,
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
                            PromotionalPrice: property.promotionalPrice
                        }} />
                        {props.user.role == "ROLE_EDITOR" || props.user.role == "ROLE_ADMIN" || props.user.role == "ROLE_REALTOR" ?

                            <ProprietorAssociated proprietor={property.proprietor} WhatsappLink="ada" />
                            :
                            <div style={{ margin: "10px" }}>
                                <Button size={"medium"} text="ACESSAR CHAT" hover="lightHover" color="var(--text-white)"
                                    background="var(--box-red-pink)" onClick={handleAccessChat}
                                />
                            </div>

                        }
                        {props.user.role == "ROLE_EDITOR" || props.user.role == "ROLE_ADMIN" || props.user.role == "ROLE_REALTOR" || props.user.role == "ROLE_CUSTOMER" ?
                            ""
                            :
                            <a href={"/login"} className="linkLogin">Faça login para realizar agendamentos e mais ações!</a>
                        }
                    </div>

                </article>


                <article className="enviroments-interestPoint">
                    <OtherEnvironmentsProperty obj={{ additionals: property.additionals }} />
                    <NewScheduleModal propertyId={String(propertyId)} />
                </article>
                <DescriptionProperty obj={{ propertyDescription: property.propertyDescription }} />
                <section className="sectionPriceProperty">
                    <HorizontalPropertySpecific />
                    
                    <MapSearchResult addressSpecific={{
                        street: property.address.street,
                        city: property.address.city,
                        state: property.address.state,
                        propertyNumber: property.address.propertyNumber
                    }
                    } width="32vw" height="25vw"
                    />
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
                />
            </div>
            
            <Footer/>
        </>
    );
}
