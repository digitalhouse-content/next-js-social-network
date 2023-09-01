import { UserType } from "@/types/user.types";
import { httpGetPublic, httpPost } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";

class MessageAPI {

    getMessageFeed = async (page: number, size: number): Promise<PageType<MessageType>> => 
        httpGetPublic(`/messages/feed`, new URLSearchParams({page: `${page}`, size: `${size}`}))
    postMessage = async (message: string): Promise<MessageType> => 
        httpPost(`/messages`, {message: message})
}

const messageApi = new MessageAPI();
export default messageApi;