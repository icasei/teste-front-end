import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { params, SearchResult, SearchListResponse, Video } from '../../store/types';
import { getParamValue } from '../../utils/uri';
import { connect } from 'react-redux';
import { IVideoState } from '../../store/interfaces/IVideoState';
import { SearchVideos, VideosLoading, ClearSearchResult } from '../../store/action-creators/action-creator';
import { ResultList } from './ResultList/ResultList.component';

interface ISearch extends RouteComponentProps<params> {
    searchResults: SearchListResponse;
    isLoading: boolean;
    youtubeClientLoaded: boolean;
    searchVideo(query: string, nextPageToken: string | null): void;
    setVideoLoading() : void,
    clearResults() : void
}

const Search = (props: ISearch) => {

    console.log(JSON.stringify(props.searchResults));

    const videos: Video[] = props.searchResults.items?.map((item) => ({ ...item, id: item.id?.videoId })) || [];

    const userQuery: string | null = getParamValue(props.location, 'search_query')

    const callBack = () => {
        if (props.youtubeClientLoaded && userQuery && props.searchResults.nextPageToken) {
            props.setVideoLoading();
            props.searchVideo(userQuery, props.searchResults.nextPageToken!)
        }
    }

    useEffect(() => {
        if (props.youtubeClientLoaded && userQuery) {
            props.clearResults();
            props.setVideoLoading();
            props.searchVideo(userQuery, null)
        }
    }, [props.youtubeClientLoaded, userQuery])

    return <ResultList callBack={callBack} isLoading={props.isLoading} videos={videos} />
}

const mapStateToProps = (state: IVideoState) => {
    return {
        searchResults: state.searchResults,
        youtubeClientLoaded: state.isYoutubeClientLoaded,
        isLoading: state.videosLoading,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        searchVideo: (query: string, nextPageToken: string | null) => dispatch(SearchVideos(query, nextPageToken)),
        setVideoLoading : () => dispatch(VideosLoading()),
        clearResults : () => dispatch(ClearSearchResult())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));