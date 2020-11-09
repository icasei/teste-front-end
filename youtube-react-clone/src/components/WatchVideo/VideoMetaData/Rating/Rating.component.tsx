import React from 'react';
import { Icon, Progress } from 'semantic-ui-react';
import { formatShortString } from '../../../../utils/number';
import { IVideoMetaData } from '../VideoMetaData.component';

import "./Rating.css"

export const Rating = (props: IVideoMetaData) => {

    let statitics = props.video.statistics;

    let likeView = null;
    let dislikeView = null;
    let percentageView = null;

    if (statitics?.likeCount && statitics.dislikeCount) {
        const likesCount = parseFloat(statitics.likeCount);
        const dislikeCount = parseFloat(statitics.dislikeCount);

        const percentage = 100.0 * (likesCount / (likesCount + dislikeCount));

        likeView = formatShortString(likesCount + '');
        dislikeView = formatShortString(dislikeCount + '');
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