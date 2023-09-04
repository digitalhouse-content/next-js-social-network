import authApi from '@/services/auth/auth.service';
import * as yup from "yup";
import { NextResponse, type NextRequest } from 'next/server'
import { AccessDeniedError } from '@/services/common/http.errors';
import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
}).required();

const client = createClient({
    url: 'redis://default:SocialNetworkPass@localhost:6379'
});

client.connect().then(() => {
    console.log('connected to redis')
})

const TEN_MINUTE = 60 * 10;

export async function POST(request: Request) {
    const {username, password} = await schema.validate(await request.json());
    try{
        const loginResponse = await authApi.loginInternal(username, password);
        const sessionId = uuidv4();
        const now = new Date();
        const expireAt = new Date(now.getTime() + TEN_MINUTE * 1000).toUTCString();
        client.set(sessionId, loginResponse.accessToken, {EX: TEN_MINUTE})
        
        const authCookie = `SocialSessionID=${sessionId}; Expires=${expireAt};Domain=localhost; HttpOnly; Path=/`;

        return new Response(JSON.stringify(loginResponse.user), {
            status: 200,
            headers: { 'Set-Cookie': authCookie },
        })
    }catch (e){
        if (e instanceof AccessDeniedError){
            return new Response(JSON.stringify({
                error: 'Invalid credentials for user: ' + username
            }), {
                status: 403,
              })
        }else{
            return new Response(JSON.stringify({
                error: 'Internal server error'
            }), {
                status: 500,
            })
        }
    }
}