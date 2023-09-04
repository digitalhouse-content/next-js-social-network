import * as yup from "yup";
import { AccessDeniedError } from '@/services/common/http.errors';
import authService from '@/services/auth/auth.service';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
}).required();

export async function POST(request: Request) {
    const {username, password} = await schema.validate(await request.json());
    
    try{
        const loginResponse = await authService.authenticate(username, password)
        
        const authCookie = `SocialSessionID=${loginResponse.sessionId};Expires=${loginResponse.expireAt};Domain=localhost; HttpOnly;Path=/`;

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