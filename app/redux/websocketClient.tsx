{/* Configuração WebSocket */ }

import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

let stompClient: Client | null = null;

export const connectWebSocket = (onMessageReceived) => {
    if (!window.WebSocket) {
        console.error("Este navegador não suporta WebSocket.");
        return;
    }
    const socket = new SockJS("http://localhost:9090/ws-chat");
    stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        onConnect: () => {
            console.log("Conectado ao WebSocket");
        },
        onStompError: (frame) => {
            console.error("Erro STOMP", frame);
        },
    });

    stompClient.onConnect = () => {
        console.log("WebSocket conectado");
    };

    stompClient.activate();
};

export const subscribeToChat = (chatId, onMessageReceived) => {
    if (stompClient && stompClient.connected) {
        return stompClient.subscribe(`/topic/chat/${chatId}`, (message) => {
            const body = JSON.parse(message.body);
            onMessageReceived(body);
        });
    }
};

export const sendMessageSocket = (message) => {
    console.log("messagem que será enviada para o back", message);
    if (stompClient && stompClient.connected) {
        stompClient.publish({
            destination: "/app/chat/send",
            body: JSON.stringify(message),
        });
    } else {
        console.error("WebSocket não conectado");
    }
};
