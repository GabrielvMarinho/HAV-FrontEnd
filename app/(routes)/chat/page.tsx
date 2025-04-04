"use client"
import ChatCard from "@/app/components/ChatCard/ChatCard";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import ArrowIcon from "@/app/components/IconsTSX/ArrowIcon";
import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import MenuDotsVertical from "@/app/components/IconsTSX/MenuDotsVertical";
import QuadradoMais from "@/app/components/IconsTSX/QuadradoMais";
import SearchIcon from "@/app/components/IconsTSX/SearchIcon";
import SmileEmoji from "@/app/components/IconsTSX/smileEmoji";
import MessageCard from "@/app/components/MessageCard/MessageCard";
import Google from "next-auth/providers/google";
import { useState } from "react";

export default function chat() {

    const [querys, setQuerys] = useState(null);

    const handleSearch = () => []

    const [currentChat, setCurrentChat] = useState();

    const handleClickOnChatCard = () => [
        setCurrentChat(true)
    ]

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
                        <div style={{
                            display: "flex", width: "100%", justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <div style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px"
                            }}>
                                <img src="https://cdn.pixabay.com/photo/2025/03/17/14/43/bird-9476034_960_720.png"
                                    alt=""
                                    style={{
                                        borderRadius: "100%", width: "3rem", height: "3rem",
                                        cursor: "pointer"
                                    }} />

                                <div style={{ display: "flex" }}>
                                    <p style={{ color: "var(--text-white)" }}>Username</p>
                                    <div style={{ marginLeft: "15.85vw" }}>
                                        <ArrowIcon width={20} height={20} color={'var(--text-white)'} />
                                    </div>
                                </div>
                            </div>
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
                        {querys && [1, 1, 1, 1, 1].map((iten) => (
                            <div onClick={handleClickOnChatCard}>
                                {""}
                                <hr /> <ChatCard />
                                {""}
                            </div>
                        ))}
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
                                        src="https://cdn.pixabay.com/photo/2025/03/17/14/43/bird-9476034_960_720.png"
                                        alt="" />
                                    <p>Username</p>
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
                                marginTop: "5rem", overflowY: "scroll", paddingRight: "2.5rem", paddingLeft: "2.5rem"
                            }}>
                                {[1, 1, 1, 1, 1].map((item, i) => <MessageCard isRequestMessage={i % 2 === 0} content={"message"} />)}
                            </div>
                        </div>

                        {/* footer section */}
                        <div style={{
                            backgroundColor: "var(--text-red-pink)"
                        }}>
                            <div style={{
                                cursor: "pointer"
                            }}>
                                <SmileEmoji width={20} height={20} color="var(--text-white)" />
                                <QuadradoMais width={20} height={20} color="var(--text-white)" />
                            </div>
                        </div>

                    </div>
                }

            </div>

        </>
    )
}