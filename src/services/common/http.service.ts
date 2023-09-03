import { URLSearchParams } from "url";
import { AccessDeniedError } from "./http.errors";

const API_URL = "http://localhost:8080/api";
const API_PUBLIC_ENDPOINT = `/public`;

export const httpGet = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`, {
        cache: 'no-cache'
    });
    if (!res.ok){
        throw new Error("Failed to retrieve: " + endpoint)
    }
    return res.json();
}

export const httpGetPublic = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
    return httpGet(`${API_PUBLIC_ENDPOINT}${endpoint}`, params);
}

export const httpPost = async <T>(endpoint: string, body: object, skipAuthorization?: boolean): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: skipAuthorization ? {'Content-Type': 'application/json'} : {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJpc3MiOiJzb2NpYWwtYXBpIiwiaWF0IjoxNjkxNTE2NDMwLCJ1c2VybmFtZSI6InlvZGEifQ.pg4lkBK2wlEorNrThDFqkC7l5uHrpZTJAYp4De4629c'
        },
        body: JSON.stringify(body)
    });
    if (!res.ok){
        if (res.status === 403){
            throw new AccessDeniedError("User has no access")
        }
        throw new Error("Failed to post: " + endpoint)
    }
    return res.json();
}

export const httpPostPublic = async <T>(endpoint: string, body: object): Promise<T> => {
    return httpPost(`${API_PUBLIC_ENDPOINT}${endpoint}`, body, true);
}