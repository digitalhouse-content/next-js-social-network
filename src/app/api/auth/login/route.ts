import authApi from '@/services/auth/auth.service';
import * as yup from "yup";
import { NextResponse, type NextRequest } from 'next/server'
import { AccessDeniedError } from '@/services/common/http.errors';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
}).required();

export async function POST(request: Request) {
    const {username, password} = await schema.validate(await request.json());
    try{
        const loginResponse = await authApi.login(username, password);

        const sessionId = loginResponse.accessToken;
        return NextResponse.json({sessionId, username});
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