"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./style/style.css";
import ChatUser from "../IconsTSX/ChatUser";

interface Message {
    text: string;
    sender: "user" | "bot";
    timestamp: string;
}

export default function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([
        { text: "Olá! Como posso te ajudar hoje?", sender: "bot", timestamp: getCurrentTime() },
        { text: "Digite o número correspondente à opção desejada:", sender: "bot", timestamp: getCurrentTime() },
        { text: "1. Ver produtos", sender: "bot", timestamp: getCurrentTime() },
        { text: "2. Suporte", sender: "bot", timestamp: getCurrentTime() },
        { text: "3. Falar com corretor", sender: "bot", timestamp: getCurrentTime() },
        { text: "4. Página de agendamentos", sender: "bot", timestamp: getCurrentTime() },
        { text: "5. Fazer um agendamento", sender: "bot", timestamp: getCurrentTime() },
        { text: "6. Encerrar conversa", sender: "bot", timestamp: getCurrentTime() }
    ]);

    const [userInput, setUserInput] = useState("");
    const router = useRouter();
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    const handleUserInput = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const newMessages = [...messages, { text: userInput, sender: "user", timestamp: getCurrentTime() }];
        let botResponse = "";
        let redirectPath = "";

        switch (userInput.trim()) {
            case "1":
                botResponse = "Ótimo! Te redirecionando para a página de produtos...";
                redirectPath = "/produtos";
                break;
            case "2":
                botResponse = "Suporte:\n1. FAQ\n2. Fale Conosco";
                break;
            case "3":
                botResponse = "Conectando você com um corretor...";
                redirectPath = "/chat-corretor";
                break;
            case "4":
                botResponse = "Te redirecionando para sua página de agendamentos...";
                redirectPath = "/agendamentos";
                break;
            case "5":
                botResponse = "Abrindo a página de agendamento...";
                redirectPath = "/agendar#modal";
                break;
            case "6":
                botResponse = "Até logo! Obrigado por conversar com a gente.";
                break;
            default:
                botResponse = "Desculpe, não entendi. Escolha uma opção de 1 a 6.";
        }

        setMessages([...newMessages, { text: botResponse, sender: "bot", timestamp: getCurrentTime() }]);
        setUserInput("");

        if (redirectPath) {
            setTimeout(() => router.push(redirectPath), 1500);
        }
    };

    return (
        <div className="containerChat">
            <div className="chat-header">
                <ChatUser width={30} height={30} color="var(--box-dark-red)" />
                <span className="chat-title">Chatbot</span>
            </div>
            <div ref={chatRef} className="chat-box">
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.sender}`}>
                        <span className="message-text">{msg.text}</span>
                        <span className="message-time">{msg.timestamp}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleUserInput} className="chat-form">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Digite sua opção..."
                    className="inputChat"
                />
            </form>
        </div>
    );
}
