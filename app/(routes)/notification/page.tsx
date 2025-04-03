import NewScheduleModal from "@/app/components/Forms/NewScheduleModal";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import SchedulingCard from "@/app/components/Information/SchedulingCard";
import ModalEmailConfirmation from "@/app/components/Modal/ModalEmailConfirmation";
import SchedulingConfirmationModal from "@/app/components/Modal/SchedulingConfirmationModal";
import Title from "@/app/components/NonInteractable/Title";

export default function notification (){
    return(
        <>
        <HeaderAdm/>
        <Title tag="h1" text="notificações"/>
        {/* <SchedulingConfirmationModal /> */}
        <ModalEmailConfirmation/>
        </>
    )
}