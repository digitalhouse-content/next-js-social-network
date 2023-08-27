import Link from "next/link";
import PostCounter from "../counters/PostsCounter";
import { TrendingHashtag } from "@/types/hash.types";

type MessageHashtagProps = {
    hash: TrendingHashtag
}

const MessageHashtag = ({hash}: MessageHashtagProps) => {
    return <>
     <Link href={`/mensajes?query=${hash.hash}&type=hash`}>
        <h4 className="font-semibold cursor-pointer p-1">{hash.hash}</h4>
    </Link>
    <div className="px-1">
        <PostCounter count={hash.count} />
    </div>
    </>
}

export default MessageHashtag;