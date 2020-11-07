import React from 'react';
import {Video} from '../../../store/type';
import { VideoPreview } from '../../Home/Content/VideoGrid/VideoPreview/VideoPreview.component';
import './ResultList.css'
import {InfiniteScroll} from '../../InfiniteScroll/InfiniteScroll.component';
import {Waypoint} from 'react-Waypoint';

interface IResultList {
    videos: Video[],
    callback(args: Waypoint.CallbackArgs): void
    isLoading: boolean
}

export const ResultList = (props: IResultList) =>{
    const previews = props.videos.map((item) => <VideoPreview isVertical video={item} key={item.id} />)

    return <div className="result_list">
    <InfiniteScroll callBack={props.callback} isLoading={props.isLoading}>
        <div>
            {previews}
        </div>
        </InfiniteScroll>
    </div>
}