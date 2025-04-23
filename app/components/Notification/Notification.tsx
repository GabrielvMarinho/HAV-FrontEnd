"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine"
import readNotification from '@/app/apiCalls/Notification/setRead';
import "./css/style.css"
import StarFavorite from '../Inputs/StarFavorite';
import Trash from '../IconsTSX/Trash';

type MessageDTO = {
    id: number;
    title: string;
    content: string;
    read: boolean;
    timestamp?: string; // Agora é opcional
}

const Notification = () => {
    const params = useParams();
    const idUser = params.id;
    const [messages, setMessages] = useState<MessageDTO[]>([])
    useEffect(() => {
        if (!idUser) return;

        fetch(`http://localhost:9090/api/getNotifications`, {
            method: "GET",
            credentials: "include",
        
        })
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
                const topic = `/topic/api/${idUser}`;
                stompClient.subscribe(topic, (mensagem) => {
                    const body: MessageDTO = JSON.parse(mensagem.body);
                    const messageComHorario: MessageDTO = {
                        ...body,
                        timestamp: new Date().toISOString()
                    };
                    setMessages(prev => {
                        const jaExiste = prev.some(msg =>
                            msg.id === body.id);
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

    const marcarComoLida = async (id: number) => {
        try {
            await readNotification({ id });
            setMessages(prev =>
                prev.map(m => m.id === id ? { ...m, read: true } : m)
            );
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
                    <HorizontalLine size={930} color='#0F0F0F ' />
                    {messages.map((message, index) => (
                        <li key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                            <section className='containerNotification'>
                                <div className='groupInfos'>

                                    
                                    <div className='bola'></div>
                                    <div className='containerMesagemTitulos'>
                                        
                                        <div className='conatinerTitulos'>
                                            <p className='identificator'>{message.title}</p>
                                            <p>{message.content}</p>
                                        </div>
                                        
                                        <div className='conatinerCorpoMensagem'>
                                            <label className='newMessageLabel'>titulo</label>

                                            <div className='iconMensagem' onClick={async () => {
                                                    const sucesso = await readNotification({ id: message.id });
                                                    if (sucesso) {
                                                        setMessages(prevMessages =>
                                                            prevMessages.filter(msg => msg.id != message.id)
                                                        );
                                                    }
                                                }}>
                                            
                                            <Trash width={20} height={20} color={'var(--text-red-pink)'}/>
                                            </div>

                                            <span style={{ fontSize: '0.85rem', color: '#666' }}>
                                            {message.timestamp &&
                                                new Date(message.timestamp).toLocaleString('pt-BR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                               
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
