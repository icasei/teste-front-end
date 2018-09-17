import 'assets/scss/Search.scss'
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import ytLogo from 'assets/img/youtube.png'

import {connect} from 'react-redux'
import {setQuery} from '../actions/youtubeActions'


@connect((store) => ({}))


export default class Search extends Component {
	constructor() {
		super()
		this.state = {
			inputError: true,
			keyPressed: '',
			doSearch: false
		}
		this.doSearch = this.doSearch.bind(this)
	}

	doSearch(e) {
		this.setState({
				inputError: searchInput.value.length < 2 ? true : false,
				keyPressed: e.key
			}, () => {
				if (!this.state.inputError && (this.state.keyPressed === undefined || this.state.keyPressed === 'Enter')) {
					this.setState({doSearch: true})
					this.props.dispatch(setQuery(searchInput.value))
				}
			}
		)
	}

	render() {
		return (
			<Grid container direction="row" justify="center" alignItems="center" spacing={0} className={this.state.doSearch ? 'doSearch' : 'search'}>
				<div className={this.state.doSearch ? 'logo-hidden' : 'logo'}>
					<img src={ytLogo} height="100" />
				</div>
				<Grid item xs={8}>
					{this.state.inputError 
					?
						<Input
							id="searchInput"
							fullWidth={true}
							autoFocus={true}
							required={true}
							placeholder="Pesquisar"
							inputProps={{
								'aria-label': 'Buscar',
							}}
							onKeyPress={this.doSearch}
							error
						/>
					:
						<Input
							id="searchInput"
							fullWidth={true}
							placeholder="Pesquisar"
							inputProps={{
								'aria-label': 'Buscar',
							}}
							onKeyPress={this.doSearch}
						/>
					}
				</Grid>
				<Grid item xs={2}>
					<IconButton onClick={this.doSearch}>
						<SearchIcon />
					</IconButton>
				</Grid>
			</Grid>
		)
	}
}