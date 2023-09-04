import authService from '@/services/auth/auth.service';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
    const headersList = headers()
    const authorization = headersList.get('Authorization')
    if (authorization !== `Bearer ${process.env.REDIS_API_TOKEN}`){
        return new Response(JSON.stringify({
            error: 'Unauthorized'
        }), {status: 401})
    }

    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key') ?? ''
    const value = await authService.getRedisValue(key);

    return NextResponse.json({value: value});
}