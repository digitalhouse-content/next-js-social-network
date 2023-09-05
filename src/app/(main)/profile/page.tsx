import { headers } from 'next/headers'
import userApi from '@/services/users/users.service';
import UserPageContainerAsync from "@/components/users/UserPageContainerAsync";


const ProfilePage = async () => {
    const accessToken = headers().get('x-social-access-token') ?? '';
    const me = await userApi.getMeInternal(accessToken);
    return <UserPageContainerAsync username={me.username} />
}

export default ProfilePage;