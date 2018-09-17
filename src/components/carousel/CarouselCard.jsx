import 'assets/scss/Carousel.scss'
import React, {Component} from 'react'
import {videoDetail} from '../../youtube/api'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'


export default class CarouselCard extends Component {
	constructor(props) {
		super(props)
		this.showDetail = this.showDetail.bind(this)
	}

	showDetail() {
		videoDetail(this.props.data.link, data => {
			this.props.showDetail(data.data.items)
		})
	}

	render() {
		return (
			<Grid item xs={this.props.xsQuantity} sm={this.props.smQuantity} md={this.props.mdQuantity} className="carousel-card">
				<Card>
					<CardMedia
						className="media"
						image={this.props.data.thumb}
						title={this.props.data.title}
					/>
					<CardActions>
						<Button size="small" color="primary" onClick={this.showDetail}>
							DETALHES DO VIDEO
					</Button>
					</CardActions>
				</Card>
			</Grid>
		)
	}
}