import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "../faq/style/style.css"
import Title from "@/app/components/NonInteractable/Title";
import SearchBarDesktop from "@/app/components/Filters/SearchBar";

export default function page() {

    return (
        <>
            <HeaderAdm />
            <Title tag={"h1"} text={"Perguntas Frequentes"} />
            <div className="navSubtitle" style={{ display: "flex", flexDirection: "column", gap: "20px", width: "60%" }}>
                <p>
                Aqui você encontra respostas rápidas e práticas para as dúvidas mais comuns sobre nossos produtos e serviços.
                </p>
            </div>
            <div className="searchBar" style={{ display: "flex", flexDirection: "column", padding: "77px", width: "60%" }}>
          <SearchBarDesktop placeholder="Busca:" />
        </div>
        
            <Footer />
        </>
    )
}