"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./style/style.css";
import ChatUser from "../IconsTSX/ChatUser";
import Send from "../IconsTSX/Send";
import XButton from "../IconsTSX/XButton";

interface Message {
    text: string;
    sender: "user" | "bot";
    timestamp: string;
}

interface ChatProps {
    onClose: () => void;
  }

export default function Chat({ onClose }: ChatProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Olá! Como posso te ajudar hoje?",
            sender: "bot",
            timestamp: getCurrentTime()
        }
    ]);

    const [userInput, setUserInput] = useState("");
    const [isInSupportMenu, setIsInSupportMenu] = useState(false);
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

    function getOptionsText() {
        return (
            "Digite o número correspondente à opção desejada:\n\n" +
            "1. Ver Imóveis\n" +
            "2. Suporte\n" +
            "3. Falar com corretor\n" +
            "4. Página de agendamentos\n" +
            "5. Fazer um agendamento\n" +
            "6. Mudar informações do perfil\n"+
            "7. Encerrar conversa"
        );
    }

    useEffect(() => {
        setMessages([
            {
                text: "Olá! Como posso te ajudar hoje?",
                sender: "bot",
                timestamp: getCurrentTime()
            }
        ])
        if (messages.length === 1) {
            const options = {
                text: getOptionsText(),
                sender: "bot",
                timestamp: getCurrentTime()
            };
            setMessages((prev) => [...prev, options]);
        }
    }, []);

    const handleUserInput = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const userMessage: Message = {
            text: userInput,
            sender: "user",
            timestamp: getCurrentTime()
        };

        let botText = "";
        let redirectPath = "";

        if (isInSupportMenu) {
            switch (userInput.trim()) {
                case "1":
                    botText = "Te redirecionando para a página de FAQ...";
                    redirectPath = "/faq";
                    break;
                case "2":
                    botText = "Te redirecionando para a página de Fale Conosco...";
                    redirectPath = "/contactus";
                    break;
                default:
                    botText = "Opção inválida. Por favor, escolha 1 (FAQ) ou 2 (Fale Conosco).";
            }
            setIsInSupportMenu(false);
        } else {
            switch (userInput.trim()) {
                case "1":
                    botText = "Ótimo! Te redirecionando para a página de Imóveis...";
                    redirectPath = "/search?purpose=venda";
                    break;
                case "2":
                    botText = "Suporte:\n1. FAQ\n2. Fale Conosco";
                    setIsInSupportMenu(true);
                    break;
                case "3":
                    botText = "Conectando você com um corretor...";
                    redirectPath = "/chat";
                    break;
                case "4":
                    botText = "Te redirecionando para sua página de agendamentos...";
                    redirectPath = "/calendar";
                    break;
                case "5":
                    botText = "Ao acessar a página do imóvel específico, você pode encontrar no canto direito da página.";
                    break;
                case "6":
                    botText = "A página de configurações do perfil está ac"
                    + "Te redirecionando para sua página de Configurações do Perfil...";
                    redirectPath = "/profile";
                    break;
                case "7":
                    botText = "Até logo! Obrigado por conversar com a gente. 😊";
                    break;
                default:
                    botText = "Desculpe, não entendi. " + getOptionsText();
            }
        }

        const botMessage: Message = {
            text: botText,
            sender: "bot",
            timestamp: getCurrentTime()
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setUserInput("");

        if (redirectPath) {
            setTimeout(() => router.push(redirectPath), 1500);
        }
    };

    return (
                <div className="containerChat">
                    <div className="chat-header">
                        <div className="IconChat">
                            <ChatUser width={30} height={30} color="var(--box-dark-red)" />
                        </div>
                        <span className="chat-title">Chatbot</span>
                        <div className="x-button" onClick={onClose}>
                            <XButton width={16} height={16} color="var(--box-dark-red)" />
                        </div>
                    </div>
                    <div ref={chatRef} className="chat-box">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.sender}`}>
                                <span className="message-text">
                                    {msg.text.split("\n").map((line, idx) => (
                                        <span key={idx}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </span>
                                <span className="message-time">{msg.timestamp}</span>
                            </div>
                        ))}
                    </div>
                    <div className="chat-send">
                        
                        <form onSubmit={handleUserInput} className="chat-form">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Digite sua opção..."
                                className="inputChat"
                            />
                            <button className={`sendIcon pointer ${userInput?"":"blockedSendIcon"}`} type={`${userInput?"submit":"button"}`}>
                                <Send width={18} height={18} color="var(--text-light-red)" />
                            </button>
                        </form>
                    </div>
                </div>
            );
        }
     