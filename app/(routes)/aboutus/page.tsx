import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import HavLogoAboutUs1 from "@/app/components/IconsTSX/havLogoAboutUs1";
import HavTextAboutUs from "@/app/components/IconsTSX/HAVTextAboutUs";
import "../aboutus/css/style.css"
import Title from "@/app/components/NonInteractable/Title";

export default function page() {

    return (
        <>
            <HeaderAdm />
            <Title tag={"h1"} text={"sobre a hav"} />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "60%" }}>
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
            <div style={{ width: "60%", marginTop: "20px" }}>
                <p style={{ color: "var(--box-red-pink)", fontWeight: "bolder" }}>
                    HAV, O SEU SONHO COMEÇA AQUI!
                </p>
            </div>
            <div className="logoAboutus" style={{
                backgroundColor: "var(--text-light-red)",
                borderRadius: "100%", padding: "15px", marginLeft: "500px"
            }}>
                <HavLogoAboutUs1 width={75} height={75} color={"var(--icon-footer-color)"}></HavLogoAboutUs1>
            </div>
            <div className="textAboutus" style={{
                backgroundColor: "var(--text-light-red)",
                borderRadius: "100%", padding: "10px", marginLeft: "200px"
            }}>
                <HavTextAboutUs width={60} height={60} color={"var(--icon-footer-color)"}></HavTextAboutUs>
            </div>

            <div style={{
                display: "flex", flexDirection: "column", gap: "20px", width: "100%",
                marginTop: "120px", marginBottom: "200px"
            }}>

                <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>

                    <div style={{
                        display: "flex", flexDirection: "column", gap: "20px",
                        marginLeft: "166px"
                    }}>
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
                    <div style={{
                        display: "flex", flexDirection: "column", gap: "20px",
                        backgroundColor: "var(--back-ground-light-red)", borderRadius: "5px",
                        padding: "10px 166px 10px 40px"
                    }}>
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

                <div style={{ display: "flex", flexDirection: "row", gap: "75px" }}>

                    <div style={{
                        display: "flex", flexDirection: "column", gap: "20px",
                        backgroundColor: "var(--back-ground-light-red)", borderRadius: "5px",
                        padding: "10px 0px 10px 166px"
                    }}>
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
                    <div style={{
                        display: "flex", flexDirection: "column", gap: "20px", marginRight: "166px"
                    }}>
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
            <div style={{ gap: "30px" }}>
                <div>
                    <div className="titleContainer" style={{ width: "60%" }}>
                        <h3 className="titleAboutus">NOSSAS CONQUISTAS</h3>
                        <div className="titleLineAboutus"></div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
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

                <div>

                </div>
            </div>
            <Footer />
        </>
    )
}