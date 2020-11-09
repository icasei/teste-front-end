import React, { Component } from 'react';
import VideoBox from '../VideoBox'
import { Grid } from '@material-ui/core'

export default class VideoGrid extends Component {

    render() {
        return (
            <Grid container spacing={2}>
                {
                    this.props.videos.map((video) => {
                        return (
                            <Grid key={video.etag} item xl={4} lg={4} md={6} sm={6} xs={12}>
                                <VideoBox video={video} searchText={this.props.searchText} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}
