import { ConflictError } from '@/services/common/http.errors';
import authService from '@/services/auth/auth.service';
import RegisterScheme from "@/schemes/register.scheme";

export async function POST(request: Request) {
    const {username, password, name, photoUrl} = await RegisterScheme.validate(await request.json());
    
    try{
        const registerResponse = await authService.register(username, password, name, photoUrl)
        
        const authCookie = `SocialSessionID=${registerResponse.sessionId};Expires=${registerResponse.expireAt};Domain=localhost; HttpOnly;Path=/`;

        return new Response(JSON.stringify(registerResponse.user), {
            status: 200,
            headers: { 'Set-Cookie': authCookie },
        })
    }catch (e){
        if (e instanceof ConflictError){
            return new Response(JSON.stringify({
                error: 'Username is already taken: ' + username
            }), {
                status: 409,
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