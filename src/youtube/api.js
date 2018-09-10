import axios from 'axios'
import {GOOGLE_API_KEY} from 'youtube/credentials';


// const GOOGLE_API_KEY = 'YOU_KEY'


const getVideos = function(query, callback, page = '') {
	//const request = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&q=${query}&type=video&part=snippet&maxResults=10`
	let request = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&q=${query}&key=${GOOGLE_API_KEY}`
	
	if (page.length > 0) {
		request = `${request}&pageToken=${page}`
	}

	axios.get(request).then(data => {
		if(callback) {
			callback(data)
		}
	})
}

const videoDetail = function(videoId, callback) {
	let request = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${GOOGLE_API_KEY}`

	axios.get(request).then(data => {
		if (callback) {
			callback(data)
		}
	})
}

export {getVideos, videoDetail}