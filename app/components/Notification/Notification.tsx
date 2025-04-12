"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine"
import readNotification from '@/app/apiCalls/Notification/setRead';
import "./css/style.css"

type MessageDTO = {
    id: number;
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
        {/*Método de getNotifications do back ->*/ }
        fetch(`http://localhost:9090/api/getNotifications/${idUser}`)
            .then(res => res.json())
            .then((data: MessageDTO[]) => {
                {/*Filtrando para aparecer só as mensagens não lidas*/ }
                const mensagensNaoLidas = data.filter(m => m.read === false);
                setMessages(Array.isArray(mensagensNaoLidas) ? mensagensNaoLidas : [])
            }).catch(e => {
                console.log("Erro ao buscar notificações", e);
            })
        const stompClient = new Client({
            webSocketFactory: () => new SockJS('http://localhost:9090/ws'),
            onConnect: () => {
                console.log('Conectado ao WebSocket');
                const topic = `/topic/api/${idUser}`
                console.log("Topico:", topic);
                stompClient.subscribe(topic, (mensagem) => {
                    const body: MessageDTO = JSON.parse(mensagem.body);
                    console.log('Mensagem recebida:', body);
                    setMessages(prev => {
                        const jaExiste = prev.some(msg =>
                            msg.title === body.title &&
                            msg.content === body.content &&
                            msg.read === body.read
                        );
                        return jaExiste ? prev : [...prev, body]
                    });
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

    const marcarComoLida = async (id: number,) => {
        try {
            await readNotification({ id });
            setMessages(prev =>
                prev.map(m => m.id === id ? { ...m, read: true } : m)
            );
            console.log("Marcado como lida");
        } catch (e) {
            console.log("Erro ao marcar como lida:", e);
        }
    };

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
                                <button
                                    onClick={async () => {
                                        const sucesso = await readNotification({ id: message.id });
                                        if (sucesso) {
                                            setMessages(prevMessages => prevMessages.filter(msg => msg.id != message.id)
                                            );
                                        }
                                    }}>
                                    Marcar como Lida
                                </button>
                            </section>
                            <HorizontalLine size={930} color='#0F0F0F ' />
                        </li>
                    )
                    )}

                </ul>
            )}
        </div>
    );
};

export default Notification;
