import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import Title from "@/app/components/NonInteractable/Title";

export default function page() {

    return (
        <>
            <HeaderAdm />
            <Title tag={"h1"} text={"sobre a hav"} />
            <div>
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
            <Footer />
        </>
    )
}