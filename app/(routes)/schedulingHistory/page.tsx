import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableListHistory from "@/app/components/Information/TableListHistory";
import InputDropdown from "@/app/components/Inputs/InputDropdown";
import Title from "@/app/components/NonInteractable/Title";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";

export default function schedulingHistory(){
    return(
        <> 
        <HeaderAdm/>
        <Title tag="h1" text="Histórico" /> 
        {/* <InputDropdown
                key={dropdownFields.city.id}
                name={dropdownFields.city.name}
                text={dropdownFields.city.text}
                id={dropdownFields.city.id}
                options={dropdownFields.city.options}
                /> */}
        <NavBarAdm options={NavBarPath.historic} />
        <TableListHistory totalPages={2} titles={["Data/Hora", "Corretor", "Finalidade", "tipo imovel", "status" ]}  data={[]}/>
        <Footer/>
        </>
    )
}