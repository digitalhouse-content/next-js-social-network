"use client"
import { useEffect, useState } from "react";
import { TrendingHashtag } from "@/types/hash.types";
import { TrendingUser } from "@/types/user.types";
import UserCard from "../users/UserCard";
import MessageHashtag from "../messages/MessageHashtag";
import {useSearchParams} from "next/navigation"
import Link from "next/link";

enum TabView {
    HASHTAGS, USERS
}

type ExploreTabsProps = {
    hashtags: TrendingHashtag[],
    users: TrendingUser[],
    initialTab?: string
}

const ExploreTabs = ({hashtags, users, initialTab}: ExploreTabsProps) => {
    const searchParams = useSearchParams();
    const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView]: TabView.HASHTAGS);

    useEffect(() => {
        setTab(searchParams.get('type') ? TabView[searchParams.get('type') as keyof typeof TabView]: tab)
    },[tab, searchParams])

    return <>
    <div className="flex justify-evenly mb-4">
        <Link href="/explore?type=HASHTAGS">
            <div
                className={`cursor-pointer ${tab === TabView.HASHTAGS ? 'border-b-4 border-blue-400' :''}`}>
                Hashtags
            </div>
        </Link>
        <Link href="/explore?type=USERS">
            <div className={`cursor-pointer ${tab === TabView.USERS ? 'border-b-4 border-blue-400' :''}`}
                >
                Usuarios
            </div>
        </Link>
    </div>
    <div>
        {tab === TabView.HASHTAGS && hashtags.map((hash, index) => 
            <MessageHashtag key={`trending-hash-${index}`} hash={hash}/>
        )}
        {tab === TabView.USERS && users.map((user, index) => 
            <UserCard user={user} key={`explore-trending-user-${index}`}/>
        )}
    </div>
</>
}

export default ExploreTabs;