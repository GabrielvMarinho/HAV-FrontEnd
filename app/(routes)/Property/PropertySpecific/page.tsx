import RealtorAssociated from "@/app/components/Information/RealtorAssociated";
import Furnished from "@/app/components/NonInteractable/Furnished";
import PropertyPageDatasAdm from "@/app/components/Information/PropertyPageDatas-Adm";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import Footer from "@/app/components/Footer/Footer";
import PropertyPrice from "@/app/components/NonInteractable/PropertyPrice";
import OtherEnvironmentsProperty from "@/app/components/Information/OtherEnvironmentsProperty";

export default function PropertySpecific() {
    return (
        <>
            <HeaderAdm />
            <article>
                <div>

                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <PropertyPageDatasAdm objectType="casa"
                        obj={{
                            id: "1",
                            bedroom: 2,
                            livingRoom: 1,
                            garage: 1,
                            bathroom: 2,
                            areaProperty: 2000,
                            address: "Czeniewiscz - Rua Bonita - SC "
                        }} />
                    <PropertyPrice Purpose="vendaPromocao" ActualPrice=" 2.000.000" Taxes=" 2.000" PromotionalPrice=" 2.500.000" />
                    <Furnished obj={{ isFurnished: true }} />
                    <RealtorAssociated obj={{ name: "nathan", id: "1", email: "nathan@gmail.com" }} />
                </div>
            </article>
            <OtherEnvironmentsProperty/>
            <Footer />
        </>
    );
}