import Message from "@/components/messages/Message";
import UserTabs from "@/components/users/UserTabs";
import Link from "next/link";

const UserPage = ({params}: {params: {username: string}}) => {
    
    const user = {
        username: params.username,
        name: 'Anakin Skywalker',
        bio: 'Vengo de Tatooine',
        followersCount: 15,
        followingCount: 3,
        messages: [
            {
                name: 'Anakin Skywalker',
                username: 'anakin',
                message: 'Segundo mensaje',
                repliesCount: 13
            }
            ,{
                name: 'Anakin Skywalker',
                username: 'anakin',
            message: 'Primer mensaje',
            repliesCount: 13
        }],
        replies: [
            {
                message: 'Mi respuesta',
                repliesCount: 0
            }
        ]
    }
    
    return <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
            <div className="rounded-full p-6 bg-gray-300 w-20 text-center mb-4">
                <span className="font-semibold text-lg">AS</span>
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
        <UserTabs messages={user.messages} replies={[]}/>
    </main>
}

export default UserPage;