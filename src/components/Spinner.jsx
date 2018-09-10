import 'assets/scss/Spinner.scss'
import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


export default class Spinner extends Component {
	constructor(props) {
		super(props)
		this.state = { mounted: false }
	}

	componentDidMount() {
		this.setState({ mounted: true  })
	}

	componentWillUnmount() {
		this.setState({mounted: false})
	}

	render() {
		return (
			<div className="spinner">
				<CircularProgress key="a" size={50} className={this.state.mounted ? 'show' : 'hide'} />
			</div>
		)
	}
}