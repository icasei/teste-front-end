import 'assets/scss/VideoList.scss'
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import VideoCard from 'components/VideoCard'

import {connect} from 'react-redux'
import {setVideoPagination} from '../actions/youtubeActions'


@connect((store) => {
	return {
		videos: store.youtube.videos
	}
})


export default class VideoList extends Component {
	constructor() {
		super()
		this.state = {}
	}

	renderResults() {
		const {videos} = this.props

		const videosCards = videos.items.map((item, index) => {
			const data = {
				thumb: item.snippet.thumbnails.medium.url,
				title: item.snippet.title,
				channel: item.snippet.channelTitle,
				description: item.snippet.description,
				link: item.id.videoId
			}
			
			return <VideoCard key={index} data={data} showDetail={this.props.showDetail} />
		})
		
		this.props.dispatch(setVideoPagination(videos.prevPageToken, videos.nextPageToken))

		return videosCards
	}
	
	render() {
		return (
			<Grid container direction="row" justify="space-between" alignItems="stretch" spacing={8} className="list">
				{this.renderResults()}
			</Grid>
		)
	}
}