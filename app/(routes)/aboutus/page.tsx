import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import HavLogoAboutUs1 from "@/app/components/IconsTSX/havLogoAboutUs1";
import HavTextAboutUs from "@/app/components/IconsTSX/HAVTextAboutUs";
import "../aboutus/css/style.css"
import Title from "@/app/components/NonInteractable/Title";
import ProfileCard from "@/app/components/Information/ProfileCard";

export default function page() {

    return (
        <>
            <HeaderAdm />
            <Title tag={"h1"} text={"sobre a hav"} />
            <div className="textStart" style={{ textAlign: "justify" }}>
                <p>
                    A Hav é uma imobiliária dedicada a transformar a experiência de compra, venda e locação de
                    imóveis em algo simples, confiável e transparente.
                    Com uma equipe apaixonada pelo mercado imobiliário, oferecemos um atendimento personalizado
                    para ajudar você a encontrar o imóvel ideal, seja ele residencial,
                    comercial ou de investimento. Na Hav, acreditamos que cada cliente é único e
                    que sua jornada imobiliária deve refletir seus desejos e necessidades.
                </p>
                <p>
                    Por isso, trabalhamos lado a lado com nossos clientes, buscando as melhores oportunidades e
                    proporcionando uma experiência diferenciada, com atendimento profissional, ética e
                    compromisso.Nossa missão é simplificar o processo imobiliário, oferecendo
                    suporte em todas as etapas. Com amplo conhecimento do mercado e um portfólio selecionado,
                    na Hav você encontra imóveis que se destacam pela qualidade, ocalização e potencial de
                    valorização.
                </p>
            </div>
            <div className="sentenceHav" style={{ marginTop: "20px", marginBottom: "50px" }}>
                <p style={{ color: "var(--box-red-pink)", fontWeight: "bolder" }}>
                    HAV, O SEU SONHO COMEÇA AQUI!
                </p>
            </div>

            <div className="logoAboutus">
                <HavLogoAboutUs1 width={75} height={75} color={"var(--icon-footer-color)"}></HavLogoAboutUs1>
            </div>
            <div className="textAboutus">
                <HavTextAboutUs width={60} height={60} color={"var(--icon-footer-color)"}></HavTextAboutUs>
            </div>

            <div className="textAboutus2">
                <HavTextAboutUs width={40} height={40} color={"var(--icon-footer-color)"}></HavTextAboutUs>
            </div>
            <div className="logoAboutus2">
                <HavLogoAboutUs1 width={65} height={65} color={"var(--icon-footer-color)"}></HavLogoAboutUs1>
            </div>

            <div className="containerMVVC">

                <div className="missionAndValues">

                    <div className="mission">
                        <div className="titleContainer">
                            <h3 className="titleAboutus">MISSÃO</h3>
                            <div className="titleLineAboutus"></div>
                        </div>
                        <div style={{ width: "75%" }}>
                            <p>
                                Nossa missão é simplificar o processo imobiliário,
                                oferecendo suporte em todas as etapas.
                            </p>
                        </div>
                    </div>
                    <div className="values">
                        <div className="titleContainer">
                            <h3 className="titleAboutus">VALORES</h3>
                            <div className="titleLineAboutus"></div>
                        </div>
                        <div style={{ width: "75%" }}>
                            <p>
                                Nossa missão é simplificar o processo imobiliário,
                                oferecendo suporte em todas as etapas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="visionAndConfident">

                    <div className="vision">
                        <div className="titleContainer">
                            <h3 className="titleAboutus">VISÃO</h3>
                            <div className="titleLineAboutus"></div>
                        </div>
                        <div style={{ width: "75%" }}>
                            <p>
                                Nossa missão é simplificar o processo imobiliário,
                                oferecendo suporte em todas as etapas.
                            </p>
                        </div>
                    </div>
                    <div className="confident">
                        <div className="titleContainer">
                            <h3 className="titleAboutus">CONFIANÇA</h3>
                            <div className="titleLineAboutus"></div>
                        </div>
                        <div style={{ width: "75%" }}>
                            <p>
                                Nossa missão é simplificar o processo imobiliário,
                                oferecendo suporte em todas as etapas.
                            </p>
                        </div>
                    </div>
                </div>
            </div >


            <div className="containerAchievements">
                <div className="containerTitleAndTexts">
                    <div className="titleContainer2">
                        <h3 className="titleAboutus">NOSSAS CONQUISTAS</h3>
                        <div className="titleLineAboutus"></div>
                    </div>
                    <div className="textsAchievements" style={{ textAlign: "justify" }}>
                        <p>
                            Nos tornamos uma das imobiliárias mais confiáveis e respeitadas da região,
                            consolidando nossa marca e ampliando nosso impacto no mercado.
                        </p>
                        <p>
                            Expandimos com sucesso para o mercado comercial, oferecendo soluções sob medida
                            para empresas prosperarem.
                        </p>
                        <p>
                            Investimos em tecnologia de ponta, garantindo uma experiência de busca
                            eficiente e personalizada para cada cliente.</p>
                        <p>
                            Recebemos prêmios de excelência em atendimento e inovação, reconhecendo nosso
                            compromisso com a satisfação do cliente.
                        </p>
                    </div>
                </div>

                <div className="imageAchievements">
                    <img className="towerImage" src="/image/ImagemEdificioAboutUs.png" alt="Imagem edifício da página about us" />
                </div>
            </div>

            <Title tag={"h1"} text={"conheça nossa equipe"} />

            <div className="containerProfiles">
                <div className="cardProfileUnique">
                    <div>
                        <h2 className="titlesProfiles">
                            SÓCIO DIRETOR
                        </h2>
                    </div>
                    <div>
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                    </div>
                </div>

                <div className="cardProfile">
                    <div>
                        <h2 className="titlesProfiles">
                            GERENTES
                        </h2>
                    </div>
                    <div className="cardsGroup">
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                    </div>
                </div>

                <div className="cardProfile">
                    <div>
                        <h2 className="titlesProfiles">
                            COORDENADORES
                        </h2>
                    </div>
                    <div className="cardsGroup">
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                    </div>
                </div>

                <div className="cardProfile">
                    <div>
                        <h2 className="titlesProfiles">
                            CORRETORES
                        </h2>
                    </div>
                    <div className="cardsGroup">
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                        <ProfileCard name={"KAUANI DA SILVA"} whatsappLink="asd" instagramLink="sad" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}