import 'assets/scss/VideoDetail.scss'
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import BackIcon from '@material-ui/icons/ArrowBackIos'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

import {connect} from 'react-redux'
import {setVideoDetail} from '../actions/youtubeActions'


@connect((store) => {
	return {
		detail: store.youtube.detail
	}
})


export default class VideoDetail extends Component {
	constructor() {
		super()
		this.state = {}
		this.hideDetail = this.hideDetail.bind(this)
	}

	hideDetail() {
		this.props.dispatch(setVideoDetail(null))
	}

	youtubePlayer(videoId) {
		const opts = {
			height: '320',
			width: '100%',
			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 1,
				loop: 1,
				modestbranding: 1,
				rel: 0
			}
		}

		return (
			<YouTube 
				videoId={videoId}
				opts={opts}
				className="youtubePlayer"
			/>
		)
	}

	renderResults() {
		const {detail} = this.props

		if (detail) {
			return (
				<div>
					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={2}>
							<Button size="small" color="primary" onClick={this.hideDetail}>
								<BackIcon className="backButton" />
							</Button>
						</Grid>
						<Grid item xs={10}>
							<Typography variant="title">
								{detail.snippet.title}
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={12} sm={8} md={6}>
							{this.youtubePlayer(detail.id)}
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={6} sm={4} md={4}>
							<Typography variant="body1" >
								<strong>{detail.snippet.channelTitle}</strong>
							</Typography>
						</Grid>
						<Grid item xs={3} sm={2} md={1}>
							<Typography variant="body1" >
								<ThumbUpIcon /> {detail.statistics.likeCount}
							</Typography>
						</Grid>
						<Grid item xs={3} sm={2} md={1}>
							<Typography variant="body1" >
								<ThumbDownIcon /> {detail.statistics.dislikeCount}
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={12} sm={8} md={6}>
							<Typography variant="body1" >
								{detail.snippet.description}
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={12} sm={8} md={6}>
							<Typography variant="body1" >
								<VisibilityIcon /> {detail.statistics.viewCount}
							</Typography>
						</Grid>
					</Grid>
				</div>
			)
		}
	}

	render() {
		return (
			<div>
				{this.renderResults()}
			</div>
		)
	}
}