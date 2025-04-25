
import "../css/style.css"
import findUserOnCookie from "@/app/utils/findUserOnCookie"
import WrappedPagePropertySpecific from "./WrappedPagePropertySpecific";
import ProprietorAssociated from "@/app/components/Information/ProprietorAssociated";
import PropertyPageDatasAdm from "@/app/components/Information/PropertyPageDatas-Adm";
import PropertyPrice from "@/app/components/NonInteractable/PropertyPrice";
import OtherEnvironmentsProperty from "@/app/components/Information/OtherEnvironmentsProperty";
import Button from "@/app/components/Inputs/Button";
import Cubes from "@/app/components/IconsTSX/Cubes";
import Gear from "@/app/components/IconsTSX/Gear";
import Balanca from "@/app/components/IconsTSX/Balanca";
import InterestPointsPropertySpecific from "@/app/components/NonInteractable/InterestPoints";
import DescriptionProperty from "@/app/components/Information/DescriptionProperty";
import HorizontalPropertySpecific from "@/app/components/NonInteractable/HorizontalTitlePropertySpecific";
import Title from "@/app/components/NonInteractable/Title";
import SliderContentOfThree from "@/app/components/Information/SliderContentOfThree";
import RealterAssociatedVertical from "@/app/components/Information/RealterAssociatedVertical";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import searchPropertyByIdSpecific from "@/app/apiCalls/Property/searchPropertyByIdSpecific";
import NewScheduleModal from "@/app/components/Forms/NewScheduleModal";
import GetSimilarThreeByPrice from "@/app/apiCalls/Property/GetSimilarThreeByPrice";
import "@/app/GeneralPages.css"
import "@/app/variables.css"
import "@/public/Image/css/style.css"

export default async function page() {
    const user = await findUserOnCookie();

    return( 
        <WrappedPagePropertySpecific user={user}></WrappedPagePropertySpecific>
        
    );
}
