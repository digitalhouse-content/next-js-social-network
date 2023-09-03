import { UserType } from "@/types/user.types";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";
import httpInternalApi from "../common/http.internal.service";

class UserAPI {

    getUserData = async (username: string): Promise<UserType> => httpInternalApi.httpGetPublic(`/users/${username}`)
    getUserMessages = async (username: string): Promise<PageType<MessageType>> => 
        httpInternalApi.httpGetPublic(`/users/${username}/messages`)
    getUserMessageReplies = async (username: string): Promise<PageType<MessageType>> => 
        httpInternalApi.httpGetPublic(`/users/${username}/messages/replies`)
}

const userApi = new UserAPI();
export default userApi;