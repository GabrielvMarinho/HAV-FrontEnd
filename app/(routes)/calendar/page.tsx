import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import InputDropdown from "@/app/components/Inputs/InputDropdown";
import Title from "@/app/components/NonInteractable/Title";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";


export default function calendar(){
    return(
        <> 
        <HeaderAdm/>
        <Title tag="h1" text="Agenda" /> 
        <NavBarAdm options={NavBarPath.historic} />
        <Footer/>
        </>
    )
}
