"use client"
import ChatCard from "@/app/components/ChatCard/ChatCard";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import MenuDotsVertical from "@/app/components/IconsTSX/MenuDotsVertical";
import Microfone from "@/app/components/IconsTSX/Microfone";
import QuadradoMais from "@/app/components/IconsTSX/QuadradoMais";
import SearchIcon from "@/app/components/IconsTSX/SearchIcon";
import SmileEmoji from "@/app/components/IconsTSX/smileEmoji";
import MessageCard from "@/app/components/MessageCard/MessageCard";
import { useEffect, useState } from "react";
import "./css/style.css"
import { currentUser, searchUser } from "@/app/redux/Auth/action";
import { useDispatch, useSelector } from "react-redux";
import { createChat, getUsersChat } from "@/app/redux/Chat/action";
import { createMessage, getAllMessage } from "@/app/redux/Message/action";
import SockJS from "sockjs-client";
import { over } from "stompjs";

export default function Chat() {

    const [querys, setQuerys] = useState("");
    const [currentChat, setCurrentChat] = useState(false);
    const [content, setContent] = useState("");
    const { auth, chat, message } = useSelector(store => store);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const [stompClient, setStompClient] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleSearch = (keyword) => {
        dispatch(searchUser({ keyword, token }))
    };

    const handleClickOnChatCard = (userId) => {
        dispatch(createChat({ token, data: { userId } }))
        setQuerys("")
    };

    const handleCreateNewMessage = () => {
        dispatch(createMessage({ token, data: { chatId: currentChat.id, content: content, } }))
    }

    const handleCurrentChat = (item) => {
        setCurrentChat(item)
    }

    const connect = () => {
        const sock = new SockJS("http://localhost:9090/ws");
        const temp = over(sock);
        setStompClient(temp);

        const headers = {
            Authorization: `Bearer ${token}`,
            "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")
        }

        temp.connect(headers, onConnect, onError);
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop()?.split(";").shift();
        }
    }

    function formatTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    const onError = (error) => {
        console.log("no error", error)
    }

    const onConnect = () => {
        setIsConnected(true);
    }

    useEffect(() => {
        if (message.newMessage && stompClient) {
            setMessages([...messages, message.newMessage])
            stompClient?.send("/app/message", {}, JSON.stringify(message.newMessage));
        }
    }, message.newMessage)

    const onMessageReceive = (payload) => {
        console.log("receive message", JSON.parse(payload.body))
        const receivedMessage = JSON.parse(payload.body);
        setMessages([...messages, receivedMessage]);
    }

    useEffect(() => {
        if (isConnected && stompClient && auth.reqUser && currentChat) {
            const subscription = stompClient.subscribe(`/group/${currentChat.id}`, onMessageReceive);

            return () => {
                subscription.unsubscribe();
            }
        }
    })


    useEffect(() => {
        connect();
    }, [])

    useEffect(() => {
        setMessages(message.messages)
    }, message.messages)

    useEffect(() => {
        if (currentChat?.id)
            dispatch(getAllMessage({ chatId: currentChat.id, token }))
    }, [currentChat, message.newMessage])

    useEffect(() => {
        dispatch(getUsersChat({ token }))
    }, [chat.createdChat])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(currentUser(token));
        }
    }, []);

    useEffect(() => {
        const userStorage = localStorage.getItem('user');

        if (userStorage) {
            try {
                const user = JSON.parse(userStorage);
                console.log("Usuário logado:", user);
            } catch (error) {
                console.log("Erro ao fazer parse do user:", error);
            }
        }
    }, []);


    return (
        <>
            <HeaderAdm />
            <div className="relative" style={{
                display: "flex", flexDirection: "row", width: "80vw",
                height: "90vh", gap: "20px"
            }}>
                <div style={{
                    width: "35%", backgroundColor: "var(--text-red-pink)", marginTop: "24px"
                }}>
                    <div style={{ display: "flex", width: "100%", margin: "10px" }}>

                        {/* home */}
                        <div style={{
                            display: "flex", width: "100%", justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                        </div>
                    </div>

                    <div style={{ marginLeft: "10px" }}>
                        <h2 style={{ fontWeight: "bolder", color: "var(--text-white)" }}>CONVERSAS</h2>
                    </div>

                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        backgroundColor: "var(--text-red-pink)", padding: "10px", position: "relative"
                    }}>
                        <input style={{
                            border: "none", outline: "none", backgroundColor: "var(--text-white)",
                            borderRadius: "0.375rem", width: "93%", paddingLeft: "2.5rem", paddingTop: "0.5rem",
                            paddingBottom: "0.5rem", position: "relative"
                        }}
                            placeholder="Busque ou Inicie um Novo Chat"
                            type="text"
                            onChange={(e) => {
                                setQuerys(e.target.value)
                                handleSearch(e.target.value)
                            }}
                            value={querys}
                        />

                        <div style={{
                            position: "absolute",
                            left: "1.5rem",
                            top: "50%",
                            transform: "translateY(-50%)"
                        }}>
                            <SearchIcon width={12} height={12} color="var(--text-red-pink)" />
                        </div>
                    </div>

                    {/* all user */}
                    <div style={{
                        overflow: "scroll", height: "70vh", paddingLeft: "0.75rem",
                        paddingRight: "0.75rem"
                    }}>
                        {
                            querys &&
                            auth.searchUser?.map((item) => (
                                <div key={item.id} onClick={() => handleClickOnChatCard(item.id)}>
                                    {""}
                                    <hr />
                                    <ChatCard name={item.full_name}
                                        userImg={
                                            item.profile_picture ||
                                            "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                                        }
                                    />
                                    {""}
                                </div>
                            ))
                        }

                        {
                            chat.chats.length > 0 && !querys &&
                            chat.chats?.map((item) => (
                                <div key={item.id} onClick={() => handleCurrentChat(item)}>
                                    <hr />
                                    {
                                        item.is_group ? (
                                            <ChatCard name={item.chat_name}
                                                userImg={
                                                    item.chat_image ||
                                                    "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                                                }
                                            />
                                        ) : (
                                            <ChatCard
                                                isChat={true}
                                                name={
                                                    auth.reqUser?.id !== item.users[0]?.id
                                                        ? item.users[0].full_name
                                                        : item.users[1].full_name
                                                }
                                                userImg={
                                                    auth.reqUser?.id !== item.users[0].id
                                                        ? item.users[0]?.profile_picture ||
                                                        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                                                        : item.users[1]?.profile_picture ||
                                                        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                                                }
                                            // notification={notifications.length}
                                            /* isNotification={
                                                notification[0]?.chat?.id === item.id
                                            } */

                                            /* message={
                                                (item.id ===
                                                    messages[messages.length - 1]?.chat?.id &&
                                                    messages[messages.length - 1]?.content) ||
                                                (item.id ===
                                                    notifications[0]?.chat?.id &&
                                                    notifications[0]?.content)
                                            } */
                                            />
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* default whatsapp page */}
                {
                    !currentChat && <div style={{
                        width: "65%", display: "flex", flexDirection: "column", alignItems: "center",
                        justifyContent: "center", position: "relative"
                    }}>
                        {/* Div do logo (agora posicionada corretamente) */}
                        <div style={{
                            position: "absolute", top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)", opacity: 0.3, zIndex: 1
                        }}>
                            <HavLogo />
                        </div>

                        {/* Conteúdo de texto */}
                        <div style={{
                            position: "relative", zIndex: 2, textAlign: "center", width: "80%"
                        }}>
                            <h1 style={{
                                fontSize: "2.25rem", lineHeight: "2.5rem", color: "var(--box-mid-dark-red)"
                            }}>
                                ChatHAV Web
                            </h1>
                            <p style={{
                                marginTop: "2.25rem", marginBottom: "2.25rem"
                            }}>
                                Envie e receba mensagens de forma fácil e ágil. Com ChatHAV você tem uma
                                forma facilitada para entrar em contato com nossos corretores e resolver
                                suas dúvidas.
                            </p>
                        </div>
                        <div style={{
                            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                            opacity: 0.5, position: "absolute"
                        }}>
                            <HavLogo width={500} height={500} />
                        </div>
                    </div>
                }

                {/* message part */}
                {
                    currentChat &&
                    <div style={{
                        width: "70%", position: "relative"
                    }}>
                        <div style={{
                            width: "100%", position: "absolute", top: "0", backgroundColor: "var(--text-red-pink)"
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{
                                    display: "flex", paddingTop: "0.75rem", paddingBottom: "0.75rem", marginLeft: "1rem",
                                    paddingLeft: "0.75rem", paddingRight: "0.75rem", alignItems: "center"

                                }}>
                                    <img
                                        style={{
                                            borderRadius: "100%", width: "3rem", height: "3rem",
                                        }}
                                        src={
                                            auth.reqUser?.id !== currentChat.users[0].id
                                                ? currentChat.users[0]?.profile_picture ||
                                                "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                                                : currentChat.users[1]?.profile_picture ||
                                                "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                                        }
                                        alt="" />
                                    <p>{currentChat && auth.reqUser?.id ===
                                        currentChat.users[0].id ? currentChat.users[1].full_name :
                                        currentChat.users[0].full_name}</p>
                                </div>
                                <div style={{
                                    display: "flex", paddingTop: "0.75rem", paddingBottom: "0.75rem", marginLeft: "1rem",
                                    paddingLeft: "0.75rem", paddingRight: "0.75rem", alignItems: "center"

                                }}>
                                    <SearchIcon width={20} height={20} color="var(--text-white)" />
                                    <MenuDotsVertical width={20} height={20} color="var(--text-white)" />
                                </div>
                            </div>
                        </div>

                        {/* message section */}
                        <div>
                            <div style={{
                                display: "flex", flexDirection: "column", justifyContent: "center",
                                marginTop: "6rem", overflowY: "scroll", paddingRight: "2.5rem", paddingLeft: "2.5rem",

                            }}>
                                {
                                    message.messages.length > 0 && message.messages?.map((item) =>
                                        <MessageCard isSentMessage={item.user?.id === auth.reqUser?.id}
                                            content={item.content} currentTime={formatTime(item.createdAt)}
                                        />)
                                }
                            </div>
                        </div>

                        {/* footer section */}
                        <div style={{
                            backgroundColor: "var(--text-red-pink)", position: "absolute", width: "100%",
                            bottom: "0", fontSize: "1.5rem", fontWeight: "2rem", paddingTop: "0.75rem",
                            paddingBottom: "0.75rem"
                        }}>
                            <div style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                paddingLeft: "1.25rem", paddingRight: "1.25rem", position: "relative"
                            }}>
                                <div style={{
                                    cursor: "pointer"
                                }}>
                                    <SmileEmoji width={20} height={20} color="var(--text-white)" />
                                </div>
                                <div style={{
                                    cursor: "pointer"
                                }}>
                                    <QuadradoMais width={20} height={20} color="var(--text-white)" />
                                </div>

                                <input style={{
                                    width: "85%", paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem",
                                    borderRadius: "30px 30px 15px 15px", border: "none", outline: "none", backgroundColor: "white"
                                }}
                                    type="text" onChange={(e) => setContent(e.target.value)}
                                    placeholder="Type message"
                                    value={content}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            handleCreateNewMessage();
                                            setContent("")
                                        }
                                    }} />
                                <div style={{
                                    cursor: "pointer"
                                }}>
                                    <Microfone width={20} height={20} color="var(--text-white)" />
                                </div>
                            </div>

                        </div>

                    </div>
                }

            </div >

        </>
    )
}
