import React, { useEffect } from 'react';

import VideoPlayer from "./Video/Video.component";
import { VideoMetaData } from "./VideoMetaData/VideoMetaData.component";

import "./WatchVideo.css";
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { params, Video } from '../../store/types';
import { getParamValue } from "../../utils/uri";
import { connect } from "react-redux";
import { IVideoState } from '../../store/interfaces/IVideoState';
import { GetVideoById } from '../../store/action-creators/action-creator';

interface IWatchVideo extends RouteChildrenProps<params> {

    video: Video;
    isYoutubeClientLoaded: boolean;
    getVideoById(videoId: string): void;
}

const WatchVideo = (props: IWatchVideo) => {

    const getVideoId = () => {
        return getParamValue(props.location, "v") || "";
    }

    let videoId = getVideoId();

    useEffect(() => {
        if (props.isYoutubeClientLoaded && videoId) {
            props.getVideoById(videoId);
        }
    }, [videoId, props.isYoutubeClientLoaded])
    return (<div className="watch_video">
        <VideoPlayer videoId={videoId} />
        <VideoMetaData video={props.video} />
    </div>)
}

const mapStateToProps = (state: IVideoState) => {
    return {
        video: state.video,
        isYoutubeClientLoaded: state.isYoutubeClientLoaded
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getVideoById: (videoId: string) => dispatch(GetVideoById(videoId))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WatchVideo));