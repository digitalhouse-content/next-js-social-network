"use client"
import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";

enum TabView {
    MESSAGES, REPLIES
}

type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[],
}

const UserTabs = ({messages, replies}: UserTabsProps) => {
    const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

    return <>
    <div className="flex justify-evenly mb-4">
        <div
            onClick={() => setTab(TabView.MESSAGES)} 
            className={`cursor-pointer ${tab === TabView.MESSAGES ? 'border-b-4 border-blue-400' :''}`}>
            Mensajes
        </div>
        <div className={`cursor-pointer ${tab === TabView.REPLIES ? 'border-b-4 border-blue-400' :''}`}
            onClick={() => setTab(TabView.REPLIES)}>
            Respuestas
        </div>
    </div>
    <div>
        {tab === TabView.MESSAGES && messages.map((message, index) => 
            <Message key={`${index}`} message={message}/>)
        }
        {tab === TabView.REPLIES && replies.map((message, index) => 
            <Message key={`${index}`} message={message}/>)
        }
    </div>
</>
}

export default UserTabs;