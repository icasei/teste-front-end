import React from 'react';
import VideoItemList from './VideoItemList';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoItemList
                onUserSelected={props.onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;