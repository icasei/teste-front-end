import React from 'react';
import { VideoPreview } from './VideoPreview/VideoPreview.component';
import { Divider } from 'semantic-ui-react'

import './VideoGrid.css'
import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader.component';
import { Video } from '../../../../store/types';

interface IVideos {
    videos: Video[];
    title: string;
    showDivider: boolean;
}


export const VideoGrid = (props: IVideos) => {

    let previews = props.videos.map((video) => <VideoPreview video={video} key={video.id} />);
    return <>
        <VideoGridHeader Title={props.title}></VideoGridHeader>
        <div className="video_grid">{previews}
        </div>
        {props.showDivider ? <Divider /> : null}
    </>
}