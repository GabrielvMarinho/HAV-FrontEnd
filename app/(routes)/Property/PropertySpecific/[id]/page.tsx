import "../css/style.css"
import RealtorAssociated from "@/app/components/Information/RealtorAssociated";
import Furnished from "@/app/components/NonInteractable/Furnished";
import PropertyPageDatasAdm from "@/app/components/Information/PropertyPageDatas-Adm";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import Footer from "@/app/components/Footer/Footer";
import PropertyPrice from "@/app/components/NonInteractable/PropertyPrice";
import OtherEnvironmentsProperty from "@/app/components/Information/OtherEnvironmentsProperty";
import Button from "@/app/components/Inputs/Button";
import Cubes from "@/app/components/IconsTSX/Cubes";
import Gear from "@/app/components/IconsTSX/Gear";
import Balanca from "@/app/components/IconsTSX/Balanca";
import DescriptionTitlePropertySpecific from "@/app/components/NonInteractable/DescriptionTitlePropertySpecific";
import DescriptionProperty from "@/app/components/Information/DescriptionProperty";
import HorizontalPropertySpecific from "@/app/components/NonInteractable/HorizontalTitlePropertySpecific";
import Title from "@/app/components/NonInteractable/Title";
import SliderContent from "@/app/components/Information/SliderContent";
import CardImovel from "@/app/components/Cards/CardImovel";
import RealterAssociatedVertical from "@/app/components/Information/RealterAssociatedVertical";

export default function PropertySpecific(props: { obj: Pick<PropertySpecific, "description"> }) {
    return (
        <>
            <div style={{ width: "var(--width-page)" }}>
                <article style={{ display: "flex", flexDirection: "row", gap: "83px" }}>
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
                        <PropertyPageDatasAdm objectType="casa"
                            obj={{
                                id: "1",
                                bedroom: 2,
                                livingRoom: 1,
                                garage: 1,
                                bathroom: 2,
                                areaProperty: 2000,
                                address: "Czeniewiscz - Rua Bonita - SC "
                            }} />
                        <PropertyPrice obj={{
                            Purpose: "vendaPromocao",
                            ActualPrice: 2000000,
                            Taxes: 2000,
                            PromotionalPrice: 2500000
                        }} />
                        <Furnished obj={{ isFurnished: true }} />
                        <RealtorAssociated obj={{ name: "nathan", id: "1", email: "nathan@gmail.com" }} />
                    </div>
                </article>
                <article className="enviroments-interestPoint">
                    <OtherEnvironmentsProperty obj={{ additional: ["Churrasqueira", "Área de serviço", "Lavabo", "Escritório"] }} />
                    <DescriptionTitlePropertySpecific text="pontos de interesse" />
                </article>
                <DescriptionProperty obj={{ description: "Se você está procurando seu novo lar na região do Jardim Maria Estela/Via Anchieta, já encontrou! Apartamento impecável e ensolarado (face norte), 2 dormitórios e 1 vaga livre" }} />
                <section className="sectionPriceProperty">
                    <HorizontalPropertySpecific />
                    <div className="containerGraphic"></div>
                </section>
                <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "115px" }}>
                    <Title text="imóveis semelhantes" tag="h1" />
                </div>
                <SliderContent items={[
                    <CardImovel
                        bairro="a"
                        cidade="a"
                        valor="2000000"
                        sell={true}
                        quantQuartos={2}
                        quantSala={3}
                        quantBanheiros={5}
                        informationStatus="a"
                        category="a" />,
                    <CardImovel
                        bairro="b"
                        cidade="b"
                        valor="2000000"
                        sell={true}
                        quantQuartos={2}
                        quantSala={3}
                        quantBanheiros={5}
                        informationStatus="b"
                        category="b" />,
                    <CardImovel
                        bairro="c"
                        cidade="c"
                        valor="2000000"
                        sell={true}
                        quantQuartos={2}
                        quantSala={3}
                        quantBanheiros={5}
                        informationStatus="c"
                        category="c " />,
                    <CardImovel
                        bairro="1"
                        cidade="1"
                        valor="2000000"
                        sell={true}
                        quantQuartos={2}
                        quantSala={3}
                        quantBanheiros={5}
                        informationStatus="1"
                        category="1 " />,
                    <CardImovel
                        bairro="2"
                        cidade="2"
                        valor="2000000"
                        sell={true}
                        quantQuartos={2}
                        quantSala={3}
                        quantBanheiros={5}
                        informationStatus="2"
                        category="2 " />,
                    <CardImovel
                        bairro="3"
                        cidade="3"
                        valor="2000000"
                        sell={true}
                        quantQuartos={2}
                        quantSala={3}
                        quantBanheiros={5}
                        informationStatus="3"
                        category="3 " />
                ]} />
            </div>
            <div style={{margin: "200px 0 100px 0"}}>
                <RealterAssociatedVertical obj={{ name: "KAUANI DA SILVA", cellphone: "+55 (47) 11111-1111" }} />
            </div>
        </>
    );
}