import 'assets/scss/VideoCard.scss'
import React, {Component} from 'react'
import {videoDetail} from '../youtube/api'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


export default class VideoCard extends Component {
	constructor(props) {
		super(props)
	}

	showDetail() {
		videoDetail(this.props.data.link, data => {
			this.props.showDetail(data.data.items)
		})
	}

	render() {
		return (
			<Grid item xs={12} sm={6} md={3}>
				<Card className="card">
					<CardMedia
						className="media"
						image={this.props.data.thumb}
						title={this.props.data.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="headline">
							{this.props.data.title}
						</Typography>
						<Typography variant="subheading" >
							{this.props.data.channel}
						</Typography>
						<Typography variant="body2">
							{this.props.data.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary" onClick={this.showDetail.bind(this)}>
							DETALHES DO VIDEO
        		</Button>
					</CardActions>
				</Card>
			</Grid>
		)
	}
}