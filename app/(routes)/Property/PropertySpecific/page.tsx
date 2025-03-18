import RealtorAssociated from "@/app/components/Information/RealtorAssociated";
import Furnished from "@/app/components/NonInteractable/Furnished";
import PropertyPageDatasAdm from "@/app/components/Information/PropertyPageDatas-Adm";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import Footer from "@/app/components/Footer/Footer";

export default function PropertySpecific() {
    return (
        <>
            <HeaderAdm/>
            <RealtorAssociated obj={{ name: "nathan", id: "1", email: "nathan@gmail.com" }} />
            <Furnished obj={{ isFurnished: false }} />
            <PropertyPageDatasAdm objectType="casa"
                obj={{
                    id: "1",
                    bedroom: 2,
                    livingRoom: 1,
                    garage: 1,
                    bathroom: 2,
                    areaProperty: 2000,
                    address: "Czeniewiscz - Rua Bonita "
                }} />
            <Footer/>
        </>
    );
}