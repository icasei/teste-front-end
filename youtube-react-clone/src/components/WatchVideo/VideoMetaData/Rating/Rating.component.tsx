import React from 'react';
import {Icon, Progress} from 'semantic-ui-react';
import { formatShortString } from '../../../../utils/number';
import { IVideoMetaData } from '../VideoMetaData.component';

import "./Rating.css";

export const Rating = (props: IVideoMetaData) => {
    let statics = props.video.statics;
    let likeView = null;
    let dislikeView = null;
    let percentageView = null;

    if(statics?.likeCount && statics.dislikeCount){
        const likesCount = parseFloat(statics.likeCount);
        const dislikeCount = parseFloat(statics.dislikeCount);

        const percentage = 100.0 * (likesCount / (likesCount + dislikeCount));

        likeView = formatShortString(likesCount + '');
        dislikeView = formatShortString
        percentageView = <Progress percent={percentage} size="tiny" />
    }

    return (
        <div className="rating">
            <div>
                <Icon name='thumbs up outline' />
                <span>{likeView}</span>
            </div>

            <div>
                <Icon name='thumbs down outline' />
                <span>{dislikeView}</span>
            </div>
            {percentageView}
        </div>
    )
}