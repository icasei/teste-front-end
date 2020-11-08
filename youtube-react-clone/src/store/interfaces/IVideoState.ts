import { Video, VideoByCategory, VideoCategory, SearchResult, SearchListResponse, VideoListResponse } from "../types";

export interface IVideoState {
    isYoutubeClientLoaded  : boolean;
    videos : Video[];
    videosByCategories : VideoByCategory;
    categories : VideoCategory[];
    videosLoading : boolean;
    searchResults : SearchListResponse;
    trendingVideos : VideoListResponse;
    video : Video
}