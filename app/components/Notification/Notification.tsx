"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

type MessageDTO = {
    recipient: number
    senderName: string
    content: string
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
        stompClient.subscribe(`/topic/mensagens${idUser}`, (mensagem) => {
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
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <p>De:</p>{message.senderName}
                        <br />
                        <p>Menssagem:</p>{message.content}
                        <br />
                        
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default Notification;
