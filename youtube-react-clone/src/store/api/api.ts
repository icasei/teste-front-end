import { VideoResponse, VideoCategoryResponse, SearchResponse } from "../types"

export const getVideos = (): Promise<VideoResponse> => {
    return getVideoByFilter();
}

export const getVideosByCategory = (categoryId: string): Promise<VideoResponse> => {
    return getVideoByFilter(categoryId);
}

export const getTrendingVideos = (nextPageToken: string | null): Promise<VideoResponse> => {
    return getVideoByFilter(undefined,undefined, 20, nextPageToken);
}

export const getVideoById = (videoId : string) => {
    return getVideoByFilter(undefined, videoId);
}

export const getVideoCategories = (): Promise<VideoCategoryResponse> => {
    return (gapi.client as any).youtube.videoCategories.list({
        "part": [
            "snippet",
        ],
        "regionCode": "IN",
    })
}

export const searchVideo = (query: string, nextPageToken: string | null, maxResults: number = 14): Promise<SearchResponse> => {
    return (gapi.client as any).youtube.search.list({
        "part": [
            "snippet",
            "id",
        ],
        "q": query,
        "regionCode": "IN",
        "maxResults": maxResults,
        "pageToken": nextPageToken,
        "type": "video"
    })
}

const getVideoByFilter = (categoryId: string = "",videoId : string | undefined = undefined, maxSize: number = 14, nextPageToken: string | null = null): Promise<VideoResponse> => {

    return (gapi.client as any).youtube.videos.list({
        "part": [
            "snippet",
            "statistics",
            "contentDetails"
        ],
        "chart": (videoId) ? undefined : "mostPopular",
        "regionCode": "IN",
        "maxResults": maxSize,
        "videoCategoryId": categoryId,
        "pageToken": nextPageToken,
        "id" : videoId
    })
}