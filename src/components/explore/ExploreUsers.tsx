import Link from "next/link";
import Image from "next/image";
import { TrendingUserType } from "@/types/user.types";
import UserCard, { UserCardLayout } from "../users/UserCard";

type ExploreUsersProps = {
    users: TrendingUserType[]
}

const ExploreUsers = ({users}: ExploreUsersProps) => {
    if (!users || users.length === 0) return <></>

    return <>
        <div className="bg-gray-200 rounded-lg px-8 py-4"
             style={{minWidth: 250}}>
            <h2 className="mb-2">A quien seguir</h2>
            {users.slice(0,4).map((user, index) =>
                <UserCard user={user} key={`trending-user-${index}`} 
                    layout={UserCardLayout.VERTICAL} />
            )}
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