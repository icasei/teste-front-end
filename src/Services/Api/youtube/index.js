import Fetch from '../../Api'


//TODO need to paste your api_key here
const api_key = ''

export const getYoutubeVideos = (query) =>
  Fetch.get(`/search?part=snippet&key=${api_key}&q=${query}`)