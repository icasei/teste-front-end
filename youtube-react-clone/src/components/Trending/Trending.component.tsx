import React, { useEffect } from 'react';
import { ResultList } from '../Search/ResultList/ResultList.component';
import { connect } from 'react-redux';
import { IVideoState } from '../../store/interfaces/IVideoState';
import { GetTrendingVideos, VideosLoading } from '../../store/action-creators/action-creator';
import { VideoListResponse } from '../../store/types';

interface ITrending {
    trendingVideos: VideoListResponse,
    isYoutubeClientLoaded: boolean;
    isLoading: boolean;
    GetTrendingVideos(nextPageToken: string | null): void;
    SetVideosLoading(): void;
}

const Trending = (props: ITrending) => {

    useEffect(() => {
        if (props.isYoutubeClientLoaded) {
            props.SetVideosLoading();
            props.GetTrendingVideos(null);
        }
    }, [props.isYoutubeClientLoaded])

    const callBack = () => {
        if (props.isYoutubeClientLoaded && props.trendingVideos.nextPageToken) {
            props.SetVideosLoading();
            props.GetTrendingVideos(props.trendingVideos.nextPageToken!);
        }
    }

    return <ResultList videos={props.trendingVideos.items || []} isLoading={props.isLoading} callBack={callBack} />
}

const mapStateToProps = (state: IVideoState) => {
    return {
        trendingVideos: state.trendingVideos,
        isYoutubeClientLoaded: state.isYoutubeClientLoaded,
        isLoading: state.videosLoading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        GetTrendingVideos: (nextPageToken: string | null) => dispatch(GetTrendingVideos(nextPageToken)),
        SetVideosLoading: () => dispatch(VideosLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);