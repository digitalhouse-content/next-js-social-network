import Link from "next/link";
import { TrendingUser } from "@/types/user.types";
import UserCard from "../users/UserCard";

type ExploreUsersProps = {
    users: TrendingUser[]
}

const ExploreUsers = ({users}: ExploreUsersProps) => {
    if (!users || users.length === 0) return <></>

    return <>
        <div className="bg-gray-200 rounded-lg px-6 py-4 w-full">
            <h2 className="mb-2">A quien seguir</h2>
            {users.slice(0,4).map((user, index) => 
                <UserCard user={user} key={`trending-user-${index}`}/>)
            }
            {users.length > 4 && 
            <Link href="/explore?type=USERS">
            <div className="text-center link-primary">
                Ver mas
            </div>
            </Link>
            }
        </div>
    </>
}
export default ExploreUsers;