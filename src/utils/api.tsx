import axios from 'axios'
import { SearchActionType } from '../store/reducers/search'
import { CardActionType } from '../store/reducers/card'
import { Dispatch } from 'redux'

const API_KEY = 'AIzaSyC1-qtw-x8ocITOYzSElz2LLAZlr7hSsE0'

export function getSearchData(searchTerm: any, pageToken?: string){
  return (dispatch: Dispatch) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${searchTerm}&key=${API_KEY}&maxResults=6&type=video&${pageToken ? "pageToken=" + pageToken : ""}`)
      .then(res => {
        dispatch({
          type:SearchActionType.ON_SEARCH_RESULT,
          searchResult: res.data
        })
      })
  }
}

export function getData(videoId: any){
  return (dispatch: Dispatch) => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${API_KEY}`)
      .then(res => {
        dispatch({
          type: CardActionType.GET_CARD,
          cardSaved: res.data
        })
      })
  }
}