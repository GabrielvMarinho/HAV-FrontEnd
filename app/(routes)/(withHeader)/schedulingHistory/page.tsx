import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableListHistory from "@/app/components/Information/TableListHistory";
import InputDropdown from "@/app/components/Inputs/InputDropdownNoLabel";
import "@/app/pageStructure.css"
import Title from "@/app/components/NonInteractable/Title";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import ModalScheduling from "@/app/components/Modal/ModalScheduling";
import AuthGuard from "@/app/context/AuthGuard";
import HeaderCustomer from "@/app/components/Header/HeaderCustomer";
import HeaderRealtor from "@/app/components/Header/HeaderRealtor";
import findUserOnCookie from "@/app/utils/findUserOnCookie";

export default async function schedulingHistory({searchParams}: {searchParams:{
    page?: string;
    data?: string;
    status?: string;

}}){
    

    const params = await searchParams;
    const {page=0, data=null, status=null} = params

    const usuario = await findUserOnCookie();
    
    return(
        <> 
            <Title tag="h1" text="Histórico" /> 
            {/* <ModalScheduling/> */}

            <NavBarAdm options={NavBarPath.historic} />
            <div className="dropdownSchedulingHistory">
            <InputDropdown
                key={dropdownFields.date.id}
                name={dropdownFields.date.name}
                size={dropdownFields.date.size}
                title={dropdownFields.date.title}
                id={dropdownFields.date.id}
                options={dropdownFields.date.options}
            />
            <div className="dropdownSegundo">
            <InputDropdown
                key={dropdownFields.statusHistoric.id}
                name={dropdownFields.statusHistoric.name}
                size={dropdownFields.statusHistoric.size}
                title={dropdownFields.statusHistoric.title}
                id={dropdownFields.statusHistoric.id}
                options={dropdownFields.statusHistoric.options}
            />

            </div>
            </div>
            
            <TableListHistory data={data} status={status} page={page}  for={usuario.role == "ROLE_REALTOR" ? "realtor" : "user"} titles={["Data/Hora", "Corretor", "Finalidade", "tipo imovel", "status" ]} />
            <Footer/>
        </>
    )
}

