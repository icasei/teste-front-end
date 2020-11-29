import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import VideoItemList from './VideoItemList';

export const VideoList = ({ videos }) => {
    const [list, setList ] = useState([]);

    useEffect(()=>{
        setList(videos.slice(0,9))
    },[videos]);
    return (
        <Grid container xs={12} lg={12}>
                {!list ?
                <></> 
                :
                list.map((video) => {
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
export const VideoList1 = ({ videos }) => {
    const [list, setList ] = useState([]);
    useEffect(()=>{
        setList(videos.slice(10,19))
    },[videos]);
    return (
        <Grid container xs={12} lg={12}>
                {!list ?
                <></> 
                :
                list.map((video) => {
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
export const VideoList2 = ({ videos }) => {
    const [list, setList ] = useState([]);
    useEffect(()=>{
        setList(videos.slice(20,29))
    },[videos]);
    return (
        <Grid container xs={12} lg={12}>
                {!list ?
                <></> 
                :
                list.map((video) => {
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