export interface IAction {
    type : ActionTypes,
    payload : any
}

export enum ActionTypes{
    YoutubeClientLoaded,
    LoadPopularVideos,
    LoadCategories,
    LoadVideosByCategories,
    VideosLoading,
    SearchVideos,
    ClearSearchResult,
    GetTrendingVideos,
    GetVideoById
}