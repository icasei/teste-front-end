import { IVideoState } from "../interfaces/IVideoState";
import { IAction, ActionTypes } from "../interfaces/IAction";
import { SearchResult, SearchResponse, Video } from "../types";

let initialState: IVideoState = {
    isYoutubeClientLoaded: false,
    videos: [],
    categories: [],
    videosByCategories: {},
    videosLoading: false,
    searchResults: {},
    trendingVideos: {},
    video: {}
}

export const YoutubeReducer = (currentState: IVideoState = initialState, action: IAction) => {
    if (action.type === ActionTypes.YoutubeClientLoaded) {
        let state = { ...currentState };
        state.isYoutubeClientLoaded = true;
        return state;
    }
    else if (action.type === ActionTypes.LoadPopularVideos) {
        let state = { ...currentState };
        state.videos = action.payload;
        return state;
    }
    else if (action.type === ActionTypes.LoadVideosByCategories) {
        let state = { ...currentState };
        state.videosByCategories = { ...state.videosByCategories, ...action.payload };
        state.videosLoading = false;
        return state;
    }
    else if (action.type === ActionTypes.LoadCategories) {
        let state = { ...currentState };
        state.categories = action.payload;
        return state;
    }
    else if (action.type === ActionTypes.VideosLoading) {
        let state = { ...currentState };
        state.videosLoading = true;
        return state;
    }
    else if (action.type === ActionTypes.SearchVideos) {
        let state = { ...currentState };
        state.videosLoading = false;
        let videos: SearchResult[] = (state.searchResults.items || []).concat(action.payload.items) || []
        state.searchResults = { ...state.searchResults, ...action.payload };
        state.searchResults.items = [...videos];
        return state;
    }
    else if (action.type === ActionTypes.ClearSearchResult) {
        let state = { ...currentState };
        state.searchResults = {};
        return state;
    }
    else if (action.type === ActionTypes.GetTrendingVideos) {
        let state = { ...currentState };
        state.videosLoading = false;
        let videos: Video[] = (state.trendingVideos.items || []).concat(action.payload.items) || []
        state.trendingVideos = { ...state.trendingVideos, ...action.payload };
        state.trendingVideos.items = [...videos];
        return state;
    }
    else if (action.type === ActionTypes.GetVideoById) {
        let state = { ...currentState };
        state.video = action.payload[0];
        return state;
    }
    return currentState;
}