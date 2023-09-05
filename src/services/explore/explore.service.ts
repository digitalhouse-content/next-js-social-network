import { TrendingUserType, UserType } from "@/types/user.types";
import { PageType } from "@/types/pagination.types";
import { TrendingHashtag } from "@/types/hash.types";
import httpInternalApi from "../common/http.internal.service";
import httpExternalApi from "../common/http.external.service";

class ExploreAPI {

    getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> => 
        httpInternalApi.httpGetPublic(`/explore/trending`, new URLSearchParams({page: `${page}`, size: `${size}`}))
    getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> => 
        httpInternalApi.httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}))
    getMyFollowRecommendations = async (page: number, size: number, accessToken: string): Promise<PageType<TrendingUserType>> => 
        httpInternalApi.httpGet(`/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}), accessToken)
}

const exploreApi = new ExploreAPI();
export default exploreApi;