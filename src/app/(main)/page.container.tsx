"use client"
import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import SearchBar from "@/components/search/SearchBar";
import { MessageProvider } from "@/contexts/message.context";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";

type IndexPageContainerProps = {
    initialQuery?: string;
    messageResponse: PageType<MessageType>
}

const IndexPageContainer = ({initialQuery, messageResponse}: IndexPageContainerProps) => {
    return <>
        <MessageProvider initialPage={messageResponse} >
            <SearchBar initialQuery={initialQuery}/>
            <MessagePostForm />
            <MessageFeed/>
        </MessageProvider>
    </>
}

export default IndexPageContainer