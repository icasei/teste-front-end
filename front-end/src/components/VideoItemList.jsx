import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

const VideoItemList = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
            <Grid item lg={3} md={4} sm={6} xs={12} onClick={() => onUserSelected(video)}>
                <Box className="video-list media">
                    <Box className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </Box>
                    <Typography className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </Typography>
                </Box>
            </Grid>
    );
};

export default VideoItemList;
