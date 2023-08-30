import { URLSearchParams } from "url";

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