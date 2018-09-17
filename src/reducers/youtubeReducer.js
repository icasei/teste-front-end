const INITIAL_STATE = {
  fetching: false,
  videos: null,
  pagination: null,
  prevPageToken: null,
  nextPageToken: null,
  detail: null,
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'VIDEO_SEARCH':
        return {...state, fetching: true, pagination: action.payload.pagination}

      case 'VIDEO_QUERY':
        return {...state, fetching: true, query: action.payload.query}

      case 'VIDEO_LIST':
        return {...state, fetching: false, pagination: null, videos: action.payload.videos}

      case 'VIDEO_PAGINATION':
        return {...state, prevPageToken: action.payload.prevPageToken, nextPageToken: action.payload.nextPageToken}

      case 'VIDEO_DETAIL':
        return {...state, detail: action.payload.videoDetail}

      default:
        return state
    }
}