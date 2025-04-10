import React from "react";
import "./css/style.css";

export default function MessageCard({ isSentMessage, content }) {
    return (
        <div className={isSentMessage ? "message-card sent" : "message-card received"}>
            <p>{content}</p>
        </div>
    );
}
