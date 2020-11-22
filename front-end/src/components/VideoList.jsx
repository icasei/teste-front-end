import React from 'react';
import { Grid } from '@material-ui/core';
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
            list.map((video) => {
                {console.log(video)}
                return (
                    <VideoItemList
                        video={video}
                        id={video.id.videoId}          
                        key={video.etag} 
                    />
                )
            })}
        </Grid>  
    );
};

export default VideoList;