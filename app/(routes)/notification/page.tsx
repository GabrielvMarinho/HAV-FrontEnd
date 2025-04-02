import HeaderAdm from "@/app/components/Header/HeaderAdm";
import SchedulingCard from "@/app/components/Information/SchedulingCard";
import SchedulingConfirmationModal from "@/app/components/Modal/SchedulingConfirmationModal";
import Title from "@/app/components/NonInteractable/Title";

export default function notification (){
    return(
        <>
        <HeaderAdm/>
        <Title tag="h1" text="notificações"/>
        {/* <SchedulingConfirmationModal /> */}
        </>
    )
}