import React from "react";
import "./css/style.css";

export default function MessageCard({ isSentMessage, content, currentTime }) {
    return (
        <div className={isSentMessage ? "message-card sent" : "message-card received"}>
            <p>{content}</p>
            <span>{currentTime}</span>
        </div>
    );
}
