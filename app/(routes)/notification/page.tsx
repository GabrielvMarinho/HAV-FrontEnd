
import ChatBot from "@/app/components/Chatbot/ChatBot";
import NewScheduleModal from "@/app/components/Forms/NewScheduleModal";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import SchedulingCard from "@/app/components/Information/SchedulingCard";
import Map from "@/app/components/Maps/Map";
import ModalConfirmPassword from "@/app/components/Modal/ModalConfirmPassword";
import ModalConfirmationPassword from "@/app/components/Modal/ModalConfirmationCellphone";
import ModalEmailConfirmation from "@/app/components/Modal/ModalEmailConfirmation";
import SchedulingConfirmationModal from "@/app/components/Modal/SchedulingConfirmationModal";
import Title from "@/app/components/NonInteractable/Title";
export default function notification (){
    
    return(
        <>
        <HeaderAdm/>
        <Title tag="h1" text="notificações"/>
        {/* <ChatBot/> */}
        {/* <SchedulingConfirmationModal /> */}
        {/* <ModalEmailConfirmation/> */}
        {/* <ModalConfirmPassword/> */}
        {/* <ModalConfirmationPassword/> */}
        {/* <div className="">
            <main>
                <div className="">
                    <h1> home</h1>
                    <Map />    
                </div>
            </main>
        </div> */}
        {/* <Chat/> */}
        
        </>
    )
}