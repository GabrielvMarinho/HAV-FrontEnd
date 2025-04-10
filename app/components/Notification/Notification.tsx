"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine"
import "./css/style.css"

type MessageDTO = {
    title: string;
    content: string;
    read: boolean;
}

const Notification = () => {
    const params = useParams();
    const idUser = params.id;
    const [messages, setMessages] = useState<MessageDTO[]>([]) // para poder aparecer todas as notificações

    useEffect(() => {
        if (!idUser) return;

        const stompClient = new Client({
            webSocketFactory: () => new SockJS('http://localhost:9090/ws'),
            onConnect: () => {
                console.log('Conectado ao WebSocket');
                stompClient.subscribe(`/topic/notifications/${idUser}`, (mensagem) => {
                    const body: MessageDTO = JSON.parse(mensagem.body);
                    console.log('Mensagem recebida:', body);
                    setMessages(prev => [...prev, body]);
                });
            },
            onStompError: (frame) => {
                console.error('Erro no STOMP:', frame);
            }
        });

        stompClient.activate();

        return () => {
            stompClient.deactivate();
        };
    }, [idUser]);

    return (
        <div>
            {messages.length === 0 ? (
                <p>Por enquanto não há mensagens</p>
            ) : (
                <ul className='boxNotification'>

                    {messages.map((message, index) => (
                        <li key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                            <HorizontalLine size={930} color='#0F0F0F ' />
                            <section className='containerNotification'>
                                {/*Div para ajustar as informações da mensagem -> */}
                                <div className='groupInfos'>
                                    <div className='bola'></div>
                                    <div style={{ display: 'flex', flexDirection: "column", gap: "5px" }}>
                                        <p className='identificator'>{message.title}</p>
                                        <p>{message.content}</p>
                                    </div>
                                </div>
                                <label className='newMessageLabel'>nova mensagem</label>
                            </section>
                            <HorizontalLine size={930} color='#0F0F0F ' />
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
};

export default Notification;
