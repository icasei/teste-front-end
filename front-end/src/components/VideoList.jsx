import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoItemList from './VideoItemList';
import { useState } from 'react';
import { useEffect } from 'react';


  
const VideoList = ({
    videos
}) => {
    const [list, setList ] = useState([]);
    useEffect(()=>{
        setList(videos)
    },[videos])
    return (
        <Grid container xs={12} lg={12}>
            {!list ?
            <></> 
            :
            list.map((video, x) => {
                return (
                <VideoItemList
                    onUserSelected={video.onVideoSelect} 
                    id={video.id.videoId}          
                    key={video.etag} 
                    video={video} 
                />
                )
            })}
        </Grid>
        
    );
};

export default VideoList;