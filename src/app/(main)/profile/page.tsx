import type { NextRequest } from 'next/server'
import { headers } from 'next/headers'
import userApi from '@/services/users/users.service';
import UserPageContainerAsync from "@/components/users/UserPageContainerAsync";


const ProfilePage = async () => {
    const accessToken = headers().get('x-social-access-token') ?? '';
    console.log('access token: ' + accessToken)
    const me = await userApi.getMeInternal(accessToken);
    return <UserPageContainerAsync username={me.username} />
}

export default ProfilePage;