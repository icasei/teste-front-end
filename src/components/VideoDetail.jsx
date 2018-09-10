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


export default class VideoDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.setState({data: this.props.data[0]})
	}

	hideDetail() {
		this.props.hideDetail()
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
		if (this.state.data) {
			return (
				<div>
					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={2}>
							<Button size="small" color="primary" onClick={this.hideDetail.bind(this)}>
								<BackIcon className="backButton" />
							</Button>
						</Grid>
						<Grid item xs={10}>
							<Typography variant="title">
								{this.state.data.snippet.title}
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={12} sm={8} md={6}>
							{this.youtubePlayer(this.state.data.id)}
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={6} sm={4} md={4}>
							<Typography variant="body1" >
								<strong>{this.state.data.snippet.channelTitle}</strong>
							</Typography>
						</Grid>
						<Grid item xs={3} sm={2} md={1}>
							<Typography variant="body1" >
								<ThumbUpIcon /> {this.state.data.statistics.likeCount}
							</Typography>
						</Grid>
						<Grid item xs={3} sm={2} md={1}>
							<Typography variant="body1" >
								<ThumbDownIcon /> {this.state.data.statistics.dislikeCount}
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={12} sm={8} md={6}>
							<Typography variant="body1" >
								{this.state.data.snippet.description}
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="row" justify="center" alignItems="center" spacing={0} className="gridDetail">
						<Grid item xs={12} sm={8} md={6}>
							<Typography variant="body1" >
								<VisibilityIcon /> {this.state.data.statistics.viewCount}
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