import {  headers } from 'next/headers'
import httpInternalApi from '@/services/common/http.internal.service';

export async function GET(request: Request) {
    const url = request.url.split('/proxy')[1];
    const accessToken = headers().get('x-social-access-token');
    
    // TODO fix URL params for get PROXY
    const response = await httpInternalApi.httpGet(url, undefined, accessToken ?? undefined);
    return new Response(JSON.stringify(response), {
        status: 200,
    })
}

export async function POST(request: Request) {
    const url = request.url.split('/proxy')[1];
    const accessToken = headers().get('x-social-access-token');
    const body = await request.json()
    const response = await httpInternalApi.httpPost(url, body, accessToken ?? undefined);
    return new Response(JSON.stringify(response), {
        status: 200,
    })
}