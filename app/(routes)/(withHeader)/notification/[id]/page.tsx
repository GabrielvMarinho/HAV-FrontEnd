import Title from "@/app/components/NonInteractable/Title";
import Notification from "@/app/components/Notification/Notification"
import HeaderAdm from "@/app/components/Header/HeaderAdm";


export default function notification() {
    return (
        <>
            <Title tag="h1" text="notificações" />
            <Notification />
        </>
    )

}