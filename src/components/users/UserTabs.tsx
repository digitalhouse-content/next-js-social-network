"use client"
import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";
import UserCard, { UserCardLayout } from "./UserCard";
import { TrendingUserType } from "@/types/user.types";

enum TabView {
    MESSAGES, REPLIES, FOLLOWERS, FOLLOWING
}

type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[],
    followings: TrendingUserType[],
    followers: TrendingUserType[],
}

const UserTabs = ({messages, replies, followers, followings}: UserTabsProps) => {
    const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

    return <>
    <div className="flex justify-evenly mb-4 w-full">
        <div
            onClick={() => setTab(TabView.MESSAGES)} 
            className={`cursor-pointer ${tab === TabView.MESSAGES ? 'border-b-4 border-blue-400' :''}`}>
            Mensajes
        </div>
        <div className={`cursor-pointer ${tab === TabView.REPLIES ? 'border-b-4 border-blue-400' :''}`}
            onClick={() => setTab(TabView.REPLIES)}>
            Respuestas
        </div>
        <div className={`cursor-pointer ${tab === TabView.FOLLOWERS ? 'border-b-4 border-blue-400' :''}`}
            onClick={() => setTab(TabView.FOLLOWERS)}>
            Seguidores
        </div>
        <div className={`cursor-pointer ${tab === TabView.FOLLOWING ? 'border-b-4 border-blue-400' :''}`}
            onClick={() => setTab(TabView.FOLLOWING)}>
            Siguiendo
        </div>
    </div>
    <div className="flex w-full flex-col">
        {tab === TabView.MESSAGES && messages.map((message, index) => 
            <Message key={`${index}`} message={message}/>)
        }
        {tab === TabView.REPLIES && replies.map((message, index) => 
            <Message key={`${index}`} message={message}/>)
        }
        {tab === TabView.FOLLOWERS && followers.map((user, index) => 
            <UserCard user={user} key={`follower-user-${index}`} 
            layout={UserCardLayout.VERTICAL} />
            )
        }
        {tab === TabView.FOLLOWING && followings.map((user, index) => 
             <UserCard user={user} key={`following-user-${index}`} 
             layout={UserCardLayout.VERTICAL} />)
        }
    </div>
</>
}

export default UserTabs;