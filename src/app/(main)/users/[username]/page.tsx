import Message from "@/components/messages/Message";
import UserTabs from "@/components/users/UserTabs";
import Link from "next/link";
import Image from "next/image";
import userApi from "@/services/users/users.service";


const UserPage = async ({params}: {params: {username: string}}) => {
    const userPromise = userApi.getUserData(params.username);
    const userMessagesPromise = userApi.getUserMessages(params.username);
    const userMessageRepliesPromise = userApi.getUserMessageReplies(params.username);

    const [user, userMessages, userMessageReplies] = await Promise.all([userPromise, userMessagesPromise, userMessageRepliesPromise])

    return <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
            <div className="text-center mb-4 block relative w-20 h-20">
                <Image src={user.photoUrl}
                    priority
                    className="rounded-full"
                    sizes='10vw'
                    fill alt='Anakin'/>
            </div>
            <h2 className="mb-1">
                {user.name}
            </h2>
            <div className="text-md mb-4 text-gray-600 cursor-pointer">
                @<Link href={`/users/${user.username}`}>{user.username}</Link>
            </div>
            <div className="mb-4">
                {user.bio}
            </div>
            <div className="flex justify-between mb-4">
                <div><span className="font-semibold">{user.followersCount}</span> Seguidores</div>
                <div><span className="font-semibold">{user.followingCount}</span> Siguiendo</div>
            </div>
        </section>
        <UserTabs messages={userMessages.content} replies={userMessageReplies.content}/>
    </main>
}

export default UserPage;