import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox'
import './style.css'
import VideoGrid from '../../components/VideoGrid'
import YoutubeService from '../../services/api'
import InfiniteScroll from 'react-infinite-scroller';
import ErrorAlert from '../../components/ErrorAlert'


export default class homePage extends Component {

    constructor() {
        super();
        this.YoutubeService = new YoutubeService();
    }

    state = {
        videos: [],
        videosGridEnable: false,
        errorDisplay: false,
        hasMoreItems: false,
        searchText: null,
        actualPage: 0.0
    }


    searchAction(searchText) {
        this.LoadItems(searchText, 6, "first");
    }

    async LoadItems(searchText, itemsNumber, type) {

        this.setState({ errorDisplay: false });

        const data = await this.YoutubeService.search(searchText, itemsNumber);

        document.getElementById("searchBox").className = "searchBoxTop"

        if (data !== 'error' && data.pageQuantity !== 0) {
            setTimeout(() => this.setState({
                nextPageToken: data.nextPageToken,
                videos: data.results,
                videosGridEnable: data.pageQuantity > 0,
                hasMoreItems: data.pageQuantity > this.state.actualPage,
                searchText: searchText
            }), type === "first" ? 1000 : 0);
        }
        else {
            setTimeout(() => this.setState({
                videosGridEnable: false,
                errorDisplay: true
            }), 1000);
        }
    }

    async LoadMore(page) {
        const pageToken = this.state.nextPageToken;
        const data = await this.YoutubeService.getPage(pageToken, this.state.searchText, 6);

        this.setState({
            nextPageToken: data.nextPageToken,
            videos: this.state.videos.concat(data.results),
            videosGridEnable: true,
            errorDisplay: false,
            hasMoreItems: data.pageQuantity > this.state.actualPage,
        });


    }

    componentDidMount() {
        const queryStringParams = new URLSearchParams(window.location.search);
        const searchText = queryStringParams.get('search');
        if (searchText) {
            this.searchAction(searchText);
        }
    }


    render() {
        return (

            <>
                <div id="searchBox" className="searchBoxCenter">
                    <SearchBox searchAction={(searchText) => this.searchAction(searchText)} />
                </div>

                {this.state.videosGridEnable && <div className="videoGrid">
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.LoadMore.bind(this)}
                        hasMore={this.state.hasMoreItems && false}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        threshold={500}
                    >
                        <VideoGrid videos={this.state.videos} searchText={this.state.searchText} />
                    </InfiniteScroll>
                </div>}

                {
                    this.state.errorDisplay && <ErrorAlert />
                }
            </>
        );
    }
}
