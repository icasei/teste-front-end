import React, { Component } from 'react';
import { ThumbUpAltOutlined, ThumbDownAltOutlined, RemoveRedEyeOutlined } from '@material-ui/icons'
import * as Styled from './styles'
import YoutubeService from '../../services/api'

export default class VideoPlayer extends Component {


    constructor() {
        super();
        this.YoutubeService = new YoutubeService();
    }

    state = {
        videoTitle: null,
        channelName: null,
        likes: 0,
        dislikes: 0,
        description: '',
        views: 0
    }


    async componentDidMount() {
        const data = await this.YoutubeService.getVideoInfo(this.props.id);

        this.setState({
            videoTitle: data.items[0].snippet.title,
            channelName: data.items[0].snippet.channelTitle,
            description: data.items[0].snippet.description,
            likes: data.items[0].statistics.likeCount,
            dislikes: data.items[0].statistics.dislikeCount,
            views: data.items[0].statistics.viewCount
        });
    }

    render() {
        return (
            <>
                <Styled.VideoTitle>
                    {this.state.videoTitle}
                </Styled.VideoTitle>    
                <Styled.VideoPlayer
                    title={this.state.videoTitle}
                    className="videoPlayer"
                    src={"https://www.youtube.com/embed/" + this.props.id}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                >
                </Styled.VideoPlayer>
                <Styled.ChannelName>
                    {this.state.channelName}
                </Styled.ChannelName>
                <Styled.ScorePanel>
                    <div className="scoreElement1">
                        <ThumbUpAltOutlined /><span style={{paddingLeft: '10px'}}>{this.state.likes}</span>
                    </div>
                    <div className="scoreElement2">
                        <ThumbDownAltOutlined /><span style={{paddingLeft: '10px'}}>{this.state.dislikes}</span>
                    </div>
                </Styled.ScorePanel>
                <Styled.VideoDescription>
                    {this.state.description.split('\n').map((line, i) => {
                        return <p key={i}>{line}</p>
                    })}
                </Styled.VideoDescription>
                <Styled.ViewsPanel>
                    <RemoveRedEyeOutlined /><span style={{ marginLeft: '25px', marginTop: '02px', position: 'absolute' }}>{this.state.views}</span>
                </Styled.ViewsPanel>   
            </>
        )
    }
}
