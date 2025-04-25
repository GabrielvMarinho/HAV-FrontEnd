{/* Configuração WebSocket */ }

/* import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

export let stompClient: Client | null = null;

export const connectWebSocket = (chatId, onMessageReceived) => {
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
            stompClient.subscribe(`/topic/chat/${chatId}`, (message) => {
                const body = JSON.parse(message.body);
                onMessageReceived(body);
            });
        },
        onStompError: (frame) => {
            console.error("Erro STOMP", frame);
        },
    });

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
    
    if (stompClient && stompClient.connected) {
        stompClient.publish({
            destination: "/app/chat/send",
            body: JSON.stringify(message),
        });
    } else {
        console.error("WebSocket não conectado");
    }
};*/

import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { fetchUnreadCounts } from "./Message/action";

export let stompClient: Client | null = null;

/* export const connectWebSocket = (chatId, onMessageReceived) => {
    if (!window.WebSocket) {
        console.error("Este navegador não suporta WebSocket.");
        return;
    }

    const socket = new SockJS("http://localhost:9090/ws-chat");

    stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        onConnect: () => {
            console.log("✅ WebSocket conectado");

            stompClient.subscribe(`/topic/chat/${chatId}`, (message) => {
                const body = JSON.parse(message.body);
                console.log("📩 Nova mensagem recebida via WebSocket:", body);
                onMessageReceived(body);
            });
        },
        onStompError: (frame) => {
            console.error("Erro STOMP:", frame);
        },
    });

    stompClient.activate();
}; */

// export const connectWebSocket = (chatIds, onMessageReceived, currentChatId, currentUserId, token, dispatch) => {
//     if (!window.WebSocket) {
//         console.error("Este navegador não suporta WebSocket.");
//         return;
//     }

//     const socket = new SockJS("http://localhost:9090/ws-chat");

//     stompClient = new Client({
//         webSocketFactory: () => socket,
//         reconnectDelay: 5000,
//         onConnect: () => {
//             console.log("✅ WebSocket conectado");

//             chatIds.forEach((chatId) => {
//                 stompClient.subscribe(`/topic/chat/${chatId}`, (message) => {
//                     const body = JSON.parse(message.body);
//                     console.log(`📩 Mensagem recebida no chat ${chatId}:`, body);

//                     // Se a mensagem for do chat aberto, dispara o callback
//                     if (chatId === currentChatId) {
//                         onMessageReceived(body);
//                     }

//                     // Se for mensagem de outro usuário
//                     if (body.userId !== currentUserId) {
//                         dispatch(fetchUnreadCounts(token));
//                     }
//                 });
//             });
//         },
//         onStompError: (frame) => {
//             console.error("Erro STOMP:", frame);
//         },
//     });

//     stompClient.activate();
// };

export const connectWebSocket = (chatId, onMessageReceived, currentUserId, token, dispatch) => {
    if (!window.WebSocket) {
        console.error("Este navegador não suporta WebSocket.");
        return;
    }

    const socket = new SockJS("http://localhost:9090/ws-chat");

    stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        onConnect: () => {
            console.log("✅ WebSocket conectado");

            stompClient.subscribe(`/topic/chat/${chatId}`, (message) => {
                const body = JSON.parse(message.body);
                console.log("📩 Nova mensagem recebida via WebSocket:", body);

                onMessageReceived(body);

                // Verifica se a mensagem é de outro usuário
                if (body.userId !== currentUserId) {
                    console.log("📬 Mensagem de outro usuário — atualizando unreadCount");
                    dispatch(fetchUnreadCounts(token));
                }
            });
        },
        onStompError: (frame) => {
            console.error("Erro STOMP:", frame);
        },
    });

    stompClient.activate();
};

export const sendMessageSocket = (message) => {
    if (stompClient && stompClient.connected) {
        console.log("📤 Enviando mensagem via WebSocket:", message);
        stompClient.publish({
            destination: "/app/chat/send",
            body: JSON.stringify(message),
        });
    } else {
        console.error("❌ WebSocket não conectado ao enviar mensagem");
    }
};
