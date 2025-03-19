import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "../faq/style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import SearchBarDesktop from "@/app/components/Filters/SearchBar";

export default function page() {
    return (
        <>
            <HeaderAdm />
            <Title tag={"h1"} text={"Perguntas Frequentes"} />
            <div className="navSubtitle">
                <p>
                    Aqui você encontra respostas rápidas e práticas para as dúvidas mais comuns sobre nossos produtos e serviços.
                </p>
            </div>
            <div className="searchBar" style={{ display: "flex", flexDirection: "column", gap: "50px", width: "60%" }}>
                <SearchBarDesktop placeholder="Busca:" />
            </div>
            <div className="searchAndBoxesContainer">
                <div className="vendaBox">
                    <Title tag={"h1"} text={"Venda"} />
                    <div className="questions">
                        <p>Quais tipos de imóveis estão disponíveis para compra?</p>
                        <p>O imóvel está pronto para morar ou em construção?</p>
                        <p>Quais são os documentos necessários para realizar a compra de um imóvel?</p>
                        <p>Como funciona o processo de escritura e registro do imóvel?</p>
                    </div>
                </div>
                <div className="aluguelBox">
                    <Title tag={"h1"} text={"Aluguel"} />
                    <div className="questions">
                        <p>Há um período mínimo de contrato para aluguel?</p>
                        <p>O aluguel inclui taxas como IPTU e condomínio?</p>
                        <p>Os imóveis estão mobiliados?</p>
                        <p>Como funciona a renovação do contrato de aluguel?</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
