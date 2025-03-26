import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import TableListHistory from "@/app/components/Information/TableListHistory";
import InputDropdown from "@/app/components/Inputs/InputDropdownNoLabel";
import "../../pageStructure.css";
import Title from "@/app/components/NonInteractable/Title";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";

export default function schedulingHistory(){
    return(
        <> 
        <HeaderAdm/>
        <Title tag="h1" text="Histórico" /> 
        <NavBarAdm options={NavBarPath.historic} />
        <div className="dropdownSchedulingHistory">
        <InputDropdown
            key={dropdownFields.data.id}
            name={dropdownFields.data.name}
            size={dropdownFields.data.size}
            title={dropdownFields.data.title}
            id={dropdownFields.data.id}
            options={dropdownFields.data.options}
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
        <TableListHistory totalPages={2} titles={["Data/Hora", "Corretor", "Finalidade", "tipo imovel", "status" ]}  data={[]}/>
        <Footer/>
        </>
    )
}