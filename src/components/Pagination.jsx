import 'assets/scss/VideoList.scss'
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'

import {connect} from 'react-redux'
import {setSearch} from '../actions/youtubeActions'


@connect((store) => {
	return {
		prevPageToken: store.youtube.prevPageToken,
		nextPageToken: store.youtube.nextPageToken
	}
})


export default class Pagination extends Component {
	constructor() {
		super()
		this.state = {}
		this.goPrev = this.goPrev.bind(this)
		this.goNext = this.goNext.bind(this)
	}

	goPrev() {
		this.props.dispatch(setSearch('prev'))
	}

	goNext() {
		this.props.dispatch(setSearch('next'))
	}

	render() {
		return (
			<Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={8}>
				<Grid item xs={5}>
					{this.props.prevPageToken &&
						<Button fullWidth={true} size="medium" onClick={this.goPrev}>
							<NavigateBefore />
							<Typography variant="button">
								Anterior
							</Typography>
						</Button>
					}
				</Grid>
				<Grid item xs={5}>
					{this.props.nextPageToken &&
						<Button fullWidth={true} size="medium" onClick={this.goNext}>
							<Typography variant="button">
								Próximo
							</Typography>
							<NavigateNext />
						</Button>
					}
				</Grid>
			</Grid>
		)
	}
}