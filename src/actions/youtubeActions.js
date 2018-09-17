export function setSearch(page) {
	return {
		type: 'VIDEO_SEARCH',
		payload: {pagination: page}
	}
}

export function setQuery(query) {
	return {
		type: 'VIDEO_QUERY',
		payload: {query: query}
	}
}

export function setVideoList(videos) {
	return {
		type: 'VIDEO_LIST',
		payload: {videos: videos}
	}
}

export function setVideoPagination(prevPageToken, nextPageToken) {
	return {
		type: 'VIDEO_PAGINATION',
		payload: {prevPageToken: prevPageToken, nextPageToken: nextPageToken}
	}
}

export function setVideoDetail(detail) {
	return {
		type: 'VIDEO_DETAIL',
		payload: {detail: detail}
	}
}