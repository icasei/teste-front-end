import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styles'


export default class VideoBox extends Component {

    NormalizeTitle() {
        const title = this.props.video.snippet.title;
        return title.length >= 59 ? title.substring(0, 59) + '...' : title;
    }

    render() {
        return (
            <Styled.ContainerS>
                <Styled.CardS className="card">
                    <Styled.CardMediaS
                        className="cardMedia"
                        image={this.props.video.snippet.thumbnails.high.url}
                    />
                    <Styled.CardHeaderS
                        className="cardHeader"
                        title={
                            this.NormalizeTitle()
                        }
                        subheader={this.props.video.snippet.channelTitle}
                    />
                    <Styled.CardContentS className="cardContent">
                        {this.props.video.snippet.description}
                    </Styled.CardContentS>
                </Styled.CardS>
                <NavLink to={"/video?id=" + this.props.video.id.videoId + '&lastSearch=' + this.props.searchText} className='link'>
                    <Styled.ButtonS variant="contained" fullWidth className='button'>
                        Detalhes do Vídeo
                    </Styled.ButtonS>
                </NavLink>
            </Styled.ContainerS>
        );

    }
}
