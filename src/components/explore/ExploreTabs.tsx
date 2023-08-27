"use client"
import { TrendingHashtag } from "@/types/hash.types";
import { TrendingUserType } from "@/types/user.types";
import { useEffect, useState } from "react";
import UserCard, { UserCardLayout } from "../users/UserCard";
import MessageHashtag from "../messages/MessageHashtag";
import {useSearchParams} from "next/navigation";
import Link from "next/link";

enum TabView {
    HASHTAGS, USERS
}

type ExploreTabsProps = {
    hashtags: TrendingHashtag[],
    users: TrendingUserType[],
    initialTab?: string; 
}

const ExploreTabs = ({hashtags, users, initialTab}: ExploreTabsProps) => {
    const searchParams = useSearchParams();
    const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView]: TabView.HASHTAGS);

    useEffect(() => {
        const type = searchParams.get('type')
        setTab(type ? TabView[type as keyof typeof TabView] : tab)
    },[searchParams, tab])

    return <>
    <div className="flex justify-evenly mb-4">
        <Link href="/explore?type=HASHTAGS">
            <div className={`cursor-pointer ${tab === TabView.HASHTAGS ? 'border-b-4 border-blue-400' :''}`}>
                Hashtags
            </div>
        </Link>
        <Link href="/explore?type=USERS">
            <div className={`cursor-pointer ${tab === TabView.USERS ? 'border-b-4 border-blue-400' :''}`}>
                Usuarios
            </div>
        </Link>
    </div>
    <div>
        {tab === TabView.HASHTAGS && hashtags.map((hash, index) => 
            <MessageHashtag hash={hash} key={`explore-hash-${index}`}/>
        )}
        {tab === TabView.USERS && users.map((user, index) => 
            <UserCard key={`explore-user-${index}`} user={user} 
                layout={UserCardLayout.VERTICAL}/>)
        }
    </div>
</>
}

export default ExploreTabs;