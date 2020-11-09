import React, { Component } from 'react';
import YoutubeService from '../../services/api'
import VideoPlayer from '../../components/VideoPlayer'
import { NavLink } from 'react-router-dom';
import * as Styled from './styles'

export default class homePage extends Component {

    constructor() {
        super();
        this.YoutubeService = new YoutubeService();

        const queryStringParams = new URLSearchParams(window.location.search);
        this.videoId = queryStringParams.get('id');
        this.lastSearch = queryStringParams.get('lastSearch')
    }


    render() {
        return (
            <>
                <NavLink to={"/?search=" + this.lastSearch} style={{
                    width: '20vw'
                }}>
                    <Styled.Arrow  style={{
                        width: '40px',
                        height: '40px'}}/>
                </NavLink>
                <VideoPlayer id={this.videoId} style={{
                    width: '80vw'
                }} />
            </>
        );
    }
}
