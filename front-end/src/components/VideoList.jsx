import { Grid } from '@material-ui/core';
import React from 'react';
import VideoItemList from './VideoItemList';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
                <VideoItemList
                    onUserSelected={props.onVideoSelect}           
                    key={video.etag} 
                    video={video} 
                />
        );
    });

    return (
        <Grid container xs={12} lg={12}>
            {videoItems}
        </Grid>
        
    );
};

export default VideoList;