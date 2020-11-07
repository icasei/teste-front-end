import React, {useEffect} from 'react';
import {ResultList} from '../Search/ResultList/ResultList.component';
import { connect } from 'react-redux';
import { IVideoState } from '../../store/type';
import {VideoListResponse} from '../../store/type';
import {GetTrendVideos, VideosLoading} from '../../store/action-creators/action-creator';

interface ITrending {
    trendingVideo: VideoListResponse,
    isYoutubeClientLoaded: boolean;
    isLoading: boolean;
    GetTrendingVideos(nextPageToken: string | null): void;
    SetVideosLoading():void;
}

const Trending = (props: ITrending) => {
    useEffect(() => {
        if(props.isYoutubeClientLoaded){
            props.SetVideosLoading();
            props.GetTrendingVideos(null);
        }
    }, [props.isYoutubeClientLoaded])

    const callBack = () => {
        if(props.isYoutubeClientLoaded && props.trendingVideo.nextPageToken){
            props.SetVideosLoading();
            props.GetTrendingVideos(props.trendingVideo.nextPageToken);

        }
    }

    return <ResultList videos={props.trendingVideo.itens || []} isLoading={props.isLoading} callback={callBack} />
}

const mapStateProps = (state: IVideoState) =>{
    return{
        trendingVideos: state.trendVideos,
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