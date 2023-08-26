import { MessageType } from "@/types/message.types";
import Link from "next/link";
import Image from "next/image";
import UserCard, { UserCardLayout } from "../users/UserCard";

type MessageProps = {
    message: MessageType;
}

const Message = ({message}: MessageProps) => {
    return <UserCard user={message.user} 
        layout={UserCardLayout.HORIZONTAL}>
        <p>{message.message}</p>
            </UserCard>
}

export default Message;