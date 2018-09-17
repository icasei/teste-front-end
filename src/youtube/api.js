import axios from 'axios'
import {GOOGLE_API_KEY} from 'youtube/credentials';


// const GOOGLE_API_KEY = 'YOU_KEY'


const requestURL = ({query, videoId, maxResults = '6'}) => {
	if (query) return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&q=${query}&key=${GOOGLE_API_KEY}&maxResults=${maxResults}`
	if (videoId) return `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${GOOGLE_API_KEY}`
}

const getVideos = (query, callback, page = '') => {
	let request = requestURL({query})
	if (page.length > 0) request = `${request}&pageToken=${page}`

	axios.get(request).then(data => {
		if(callback) {
			callback(data)
		}
	})
}

const videoDetail = (videoId, callback) => {
	const request = requestURL({videoId})

	axios.get(request).then(data => {
		if (callback) {
			callback(data)
		}
	})
}

export {getVideos, videoDetail}