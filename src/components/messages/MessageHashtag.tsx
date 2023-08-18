import { TrendingHashtag } from "@/types/hash.types";
import Link from "next/link";
import PostCounter from "../counters/PostsCounter";

type MessageHashtagProps = {
    hash: TrendingHashtag
}

const MessageHashtag = ({hash}: MessageHashtagProps) => {
    return <div className="mb-4">
    <Link href="/mensajes?query=Tatooine&type=hash">
        <h4 className="font-semibold cursor-pointer p-1">{hash.hash}</h4>
    </Link>
    <div className="px-1">
        <PostCounter count={hash.count} />
    </div>
</div>
}

export default MessageHashtag;