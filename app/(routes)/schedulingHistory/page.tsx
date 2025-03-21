import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import TableListHistory from "@/app/components/Information/TableListHistory";
import Title from "@/app/components/NonInteractable/Title";

export default function schedulingHistory(){
    return(
        <> 
        <HeaderAdm/>
        <Title tag="h1" text="Histórico" /> 
        <TableListHistory totalPages={0} titles={["Data/Hora", "Corretor", "Finalidade", "tipo imovel", "status" ]}  data={[]}/>
        <Footer/>
        </>
    )
}