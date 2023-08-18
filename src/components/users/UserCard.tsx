import { TrendingUser, UserType } from "@/types/user.types";
import Image from "next/image";
import Link from "next/link";

type UserCardProps = {
    user: TrendingUser
}

const UserCard = ({user}: UserCardProps) => {
    return <div 
        className="mb-4 grid grid-cols-12">
            <div className="w-full mt-1 text-center mb-4 block relative col-span-2 flex items-center justify-center">
                <Image src={user.photoUrl}
                    priority
                    className="rounded-full"
                    width={60}
                    height={60}
                    alt={user.name}/>
            </div>
            <div className="flex flex-col ml-4 mt-2 col-span-10">
                <div className="flex flex-col">
                    <h3>
                        {user.name}
                    </h3>
                    <div className="text-md text-gray-600 cursor-pointer">
                        @<Link href={`/users/${user.username}`}>{user.username}</Link>
                    </div>
                </div>
            </div>
    </div>
}

export default UserCard;