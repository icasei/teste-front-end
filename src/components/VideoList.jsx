import 'assets/scss/VideoList.scss'
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import VideoCard from 'components/VideoCard'


export default class VideoList extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		const videos = this.props.data.items.map((item, index) => {
			const data = {
										thumb: item.snippet.thumbnails.medium.url,
										title: item.snippet.title,
										channel: item.snippet.channelTitle,
										description: item.snippet.description,
										link: item.id.videoId
									}
			
			return <VideoCard key={index} data={data} showDetail={this.props.showDetail} />
		})
		this.props.onPagination(this.props.data.prevPageToken, this.props.data.nextPageToken)
		this.setState({ items: videos })
	}
	
	render() {
		return (
			<Grid container direction="row" justify="space-between" alignItems="stretch" spacing={8} className="list">
				{this.state.items}
			</Grid>
		)
	}
}