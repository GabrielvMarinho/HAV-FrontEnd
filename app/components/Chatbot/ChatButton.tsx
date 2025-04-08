"use client";

import React from "react";
import ChatUser from "../IconsTSX/ChatUser";

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
    
  return (
    <div className="chatbot-float" onClick={onClick}>
      <ChatUser width={40} height={40} color="var(--text-white)" />
    </div>
  );
}
