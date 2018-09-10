import 'assets/scss/VideoList.scss'
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'


export default class Pagination extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	goPrev() {
		this.props.onSearch(this.props.query, this.props.prev)
	}

	goNext() {
		this.props.onSearch(this.props.query, this.props.next)
	}

	render() {
		return (
			<Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={8}>
				<Grid item xs={5}>
					{this.props.prev &&
						<Button fullWidth="true" size="medium" onClick={this.goPrev.bind(this)}>
							<NavigateBefore />
							<Typography variant="button">
								Anterior
							</Typography>
						</Button>
					}
				</Grid>
				<Grid item xs={5}>
					{this.props.next &&
						<Button fullWidth="true" size="medium" onClick={this.goNext.bind(this)}>
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