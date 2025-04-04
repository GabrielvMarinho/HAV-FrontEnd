import React from "react";
import "./css/style.css";

export default function MessageCard({ isRequestMessage, content }) {
    return (
        <div
            className={isRequestMessage ? "message-card request" : "message-card response"}
        >
            <p>{content}</p>
        </div>
    );
}