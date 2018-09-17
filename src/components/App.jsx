import 'assets/scss/App.scss'
import React, {Component} from 'react'
import Search from 'components/Search'
import VideoList from 'components/VideoList'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import VideoDetail from 'components/VideoDetail'
import Carousel from 'components/carousel/Carousel'
import {getVideos} from '../youtube/api'

import {connect} from 'react-redux'
import {setVideoList} from '../actions/youtubeActions'


@connect((store) => {
  return {
    fetching: store.youtube.fetching,
    query: store.youtube.query,
    videos: store.youtube.videos,
    pagination: store.youtube.pagination,
    prevPageToken: store.youtube.prevPageToken,
    nextPageToken: store.youtube.nextPageToken,
    detail: store.youtube.detail
  }
})


export default class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.hideDetail = this.hideDetail.bind(this)
    this.showDetail = this.showDetail.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  scrollUp() {
    var doc = document.documentElement
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (top > 0) {
      // window.scrollTo(0, top - 15)
      window.scrollTo(0, 0)
    }
  }

  onSearch(query, page = '') {
    getVideos(query, data => {
      this.props.dispatch(setVideoList(data.data))
    }, page)

    if (page.length > 0) {
      this.scrollUp()
    }
  }

  showDetail(data) {
    this.setState({videoDetail: data})
    this.scrollUp()
  }

  hideDetail() {
    this.setState({videoDetail: undefined})
  }

  renderResults() {
    const {fetching, query, videos, pagination, prevPageToken, nextPageToken, detail} = this.props


    if (query && fetching) {
      if (pagination == 'prev') {
        this.onSearch(query, prevPageToken)
      } else if (pagination == 'next') {
        this.onSearch(query, nextPageToken)
      } else {
        this.onSearch(query)
      }
    }
    

    if (detail) {
      return (
        <VideoDetail />
      )
    } else {
      return (
        <div>
          {videos && !fetching
            ? 
              <div>
                <VideoList />
                <Carousel 
                  xsQuantity={12} 
                  smQuantity={6} 
                  mdQuantity={3} 
                  speed={5} 
                />
              </div>
            : fetching && <Spinner />
          }

          {(prevPageToken || nextPageToken) &&
            <Pagination />
          }
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app">
        <Search />
        {this.renderResults()}
      </div>
    )
  }
}