import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import SquarePuls from "@/app/components/IconsTSX/SquarePlus";
import Title from "@/app/components/NonInteractable/Title";
import "./style/style.css";
import searchPropertyByIdSpecific from "@/app/apiCalls/Property/searchPropertyByIdSpecific";

export default async function propertyComparison({ searchParams }: {
    searchParams: {

        propertyOne: string,
        propertyTwo: string,
        propertyThree: string
  }}) {

    const params = await searchParams;
    const { propertyOne, propertyTwo, propertyThree} = params

    if(propertyOne){
        try {
            const response = await searchPropertyByIdSpecific(parseInt(propertyOne));
            console.log("Resposta completa da API:", response);

        } catch (error) {
            console.log("Erro ao buscar propriedade:", error);
        }
    }
  
    return(
        <>
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
