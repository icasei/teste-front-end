import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import { Video } from '../../../store/types';
import { Rating } from "./Rating/Rating.component";

import './VideoMetaData.css'

export interface IVideoMetaData {
    video: Video
}

export const VideoMetaData = (props: IVideoMetaData) => {

    if (!props.video || !props.video.statistics) {
        return <div></div>
    }
    const views = Number(props.video.statistics?.viewCount).toLocaleString();

    return (
        <div className="video-metadata">
            <h3>{props.video.snippet?.title}</h3>
            <div className="video-stats">
                <span>{views} views</span>
                <div className="video-action">
                    <Rating video={props.video} />
                    <Button basic icon labelPosition="left">
                        <Icon name="share" />
                        Share
                    </Button>
                    <Button basic icon>
                        <Icon name="add circle" />
                    </Button>
                    <Button basic icon>
                        <Icon name="ellipsis horizontal" />
                    </Button>
                </div>
            </div>
            <Divider />
        </div>
    )
}