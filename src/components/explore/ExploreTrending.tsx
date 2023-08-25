import Link from "next/link";
import { TrendingHashtag } from "@/types/hash.types";
import MessageHashtag from "../messages/MessageHashtag";

type ExploreTrendingProps = {
    hashes: TrendingHashtag[]
}

const ExploreTrending = ({hashes}: ExploreTrendingProps) => {
    if (!hashes || hashes.length === 0) return <></>

    return <>
        <div className="bg-gray-200 rounded-lg px-6 py-4 w-full">
            <h2 className="mb-2">Trending</h2>
            {hashes.slice(0,2).map((hash, index) =>
                <MessageHashtag key={`trending-hash-${index}`} hash={hash}/>
            )}
            {hashes.length > 2 && 
            <Link href="/explore?type=HASHTAGS">
            <div className="text-center link-primary">
                Ver mas
            </div>
            </Link>
            }
        </div>
    </>
}
export default ExploreTrending;