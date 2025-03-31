import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import SquarePuls from "@/app/components/IconsTSX/SquarePlus";
import Title from "@/app/components/NonInteractable/Title";
import "../propertyComparison/style/style.css";

export default function propertyComparison(){
    return(
        <>
        <HeaderAdm/>
        <Title tag="h1" text="Comparação de Imóveis"/>
        <div className="containerPropertyComparison">
            <div className="iconsTextPropertyComparison">
                <SquarePuls width="40" height="40" color="var(--text--mid-dark-red)"/>
                <h2 className="textPropertyComparison"> Adicionar Imóvel </h2>
            </div>
            <div className="iconsTextPropertyComparison">
                <SquarePuls width="40" height="40" color="var(--text--mid-dark-red)"/>
                <h2 className="textPropertyComparison"> Adicionar Imóvel </h2>
            </div>
            <div className="iconsTextPropertyComparison">
                <SquarePuls width="40" height="40" color="var(--text--mid-dark-red)"/>
                <h2 className="textPropertyComparison"> Adicionar Imóvel </h2>
            </div>
        </div>
        <Footer/>
        </>
    )
}
