export type VideoResponse = gapi.client.Response<gapi.client.youtube.VideoListResponse>

export type VideoListResponse =gapi.client.youtube.VideoListResponse

export type Video = gapi.client.youtube.Video

export type VideoCategoryResponse = gapi.client.Response<gapi.client.youtube.VideoCategoryListResponse>

export type VideoCategory = gapi.client.youtube.VideoCategory

export type VideoByCategory = { [Id: string]: Video[] }

export type params = {
    search_query: string;
    v : string;
}

export type SearchListResponse = gapi.client.youtube.SearchListResponse;

export type SearchResponse = gapi.client.Response<gapi.client.youtube.SearchListResponse>

export type SearchResult = gapi.client.youtube.SearchResult;


