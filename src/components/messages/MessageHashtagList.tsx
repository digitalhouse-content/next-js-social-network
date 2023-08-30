import exploreApi from "@/services/explore/explore.service";
import { TrendingHashtag } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MessageHashtag from "./MessageHashtag";

type MessageHashtagListProps = {
    initialPage: PageType<TrendingHashtag>;
} 

const MessageHashtagList = ({initialPage}: MessageHashtagListProps) =>{
    const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage)
    const [hashtags, setHashtags] = useState<TrendingHashtag[]>(initialPage.content);

    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1;
        const response = await exploreApi.getTrendingHashtags(pageNumber, 20)
        setPage(response);
        setHashtags([...hashtags, ...response.content])
    }

    const refresh = async () => {
        const response = await exploreApi.getTrendingHashtags(0, 20)
        setPage(response);
        setHashtags(response.content)
    }

    return <InfiniteScroll
        dataLength={hashtags.length}
        next={fetchData}
        hasMore={!page.pagination.last}
        loader={<h4>Cargando mas mensajes...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Ups! Has llegado al final!</b>
            </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; Arrastra hacia abajo para refrescar</h3>
        }
        releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Suelta para refrescar</h3>
        }
        >
        {hashtags.map((hash, index) => 
            <MessageHashtag hash={hash} key={`explore-hash-${index}`}/>)
        }
    </InfiniteScroll>
}

export default MessageHashtagList;