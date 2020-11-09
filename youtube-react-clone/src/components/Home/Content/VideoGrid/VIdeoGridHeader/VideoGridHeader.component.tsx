import React from 'react'
import './VideoGridHeader.css'

interface IVideoGridHeader {
    Title: string;
}

export const VideoGridHeader = (props: IVideoGridHeader) => {
    return <div className= "video_grid_header">
        <span className ="video_title">{props.Title}</span>
    </div>
}