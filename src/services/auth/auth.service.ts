import { LoginResponseType } from "@/types/auth.types";
import httpExternalApi from "../common/http.external.service";
import httpInternalApi from "../common/http.internal.service";

class AuthAPI {

    login = async (username: string, password: string): Promise<LoginResponseType> => 
        httpExternalApi.httpPost(`/auth/login`, {username: username, password: password})

    loginInternal = async (username: string, password: string): Promise<LoginResponseType> => 
        httpInternalApi.httpPostPublic(`/auth/login`, {username: username, password: password})
}

const authApi = new AuthAPI();
export default authApi;