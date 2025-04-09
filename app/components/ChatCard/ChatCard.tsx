import React from "react";
import "./css/style.css";

export default function ChatCard({ name, userImg }) {
    return (
        <div className="chatContainner" style={{
            display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "0.5rem",
            paddingBottom: "0.5rem", cursor: "pointer"
        }}>
            <div style={{
                width: "20%"
            }}>
                <img style={{
                    borderRadius: "100%", width: "3rem", height: "3rem"
                }}
                    src={userImg}
                    alt="" />
            </div>
            <div style={{ paddingLeft: "1.25rem", width: "80%" }}>
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: "1.75rem"
                    }}>{name}</p>
                    <p style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem"
                    }}>Timestamp</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p>message...</p>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "0.5rem" }}>
                        <p style={{
                            fontSize: "0.75rem", lineHeight: "1rem", borderRadius: "100%",
                            color: "var(--text-red-pink)", backgroundColor: "var(--text-white)",
                            padding: "0.25rem 0.5rem"
                        }}>5</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
