"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import Chat from "./Chat";

export default function ChatBot (){

    const [mostrarChat, setMostrarChat] = useState(false);

    return (
        <>
            {!mostrarChat && <ChatButton onClick={() => setMostrarChat(true)} />}
            {mostrarChat && <Chat onClose={() => setMostrarChat(false)} />}
        
        </>
    );
}