import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AccessDeniedError } from './services/common/http.errors';
import authApi from './services/auth/auth.api';
 
export async function middleware(request: NextRequest) {

  try{
    const sessionId = request.cookies.get('SocialSessionID')?.value ?? ''
    if (!sessionId) throw new AccessDeniedError("Session ID is not valid anymore");
    const accessToken = await getAccessToken(sessionId);
    if (!accessToken) throw new AccessDeniedError("Session ID is not valid anymore");
    return getAuthenticationHeaders(request, accessToken);

  }catch(e){
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await authApi.getRedisValue(sessionId)).value;
}

const getAuthenticationHeaders = (request: NextRequest, accessToken: string) => {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-social-access-token', accessToken)
 
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
 
export const config = {
  matcher: ['/profile','/api/proxy/:path*']
}