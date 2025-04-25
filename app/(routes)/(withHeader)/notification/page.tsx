"use client";

import { useState } from "react";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import ToggleButton from "@/app/components/Inputs/ToggleButton";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import Title from "@/app/components/NonInteractable/Title";
import Notificacao from "@/app/components/Notification/Notification";
import "./style/style.css";

export default function Notification() {
    const [notificationStatus, setNotificationStatus] = useState(false);

    return (
        <>
            <Title tag={"h1"} text={"NOTIFICAÇÕES"} />
            <div className="notification-container">                
 {/*               <div className="notification-status">
                    <span className="status-label">Status notificações</span>
                    <ToggleButton 
                        toggled={notificationStatus} 
                        onChange={() => setNotificationStatus(!notificationStatus)} 
                    />
                </div>
    */}
                
               
            </div>
            <Notificacao/>
        </>
    );
}