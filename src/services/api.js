import axios from 'axios'

const API_KEY = 'AIzaSyC1-qtw-x8ocITOYzSElz2LLAZlr7hSsE0'
const API_URL= 'https://www.googleapis.com/youtube/v3/'

export default class {

    constructor() {
        this.apiToken = API_KEY;
        this.apiURL = API_URL;
    }

    async search(searchText, itemsNumber) {
        const endpoint = this.apiURL + 'search?part=id,snippet&q=' + searchText + '&key=' + this.apiToken + '&maxResults=' + itemsNumber + '&type=video';

        const answer = await axios.get(endpoint).then((result) => {
            const apiData = result.data;

            let output = {
                nextPageToken: apiData.nextPageToken,
                pageQuantity: this.getNumberOfPages(apiData),
                results: apiData.items.filter((item) => {
                    item['searchText'] = searchText;
                    return true;
                })
            }
            return output;
        }).catch((error) => {
            return 'error';
        })

        return answer;
    }

    async getPage(page, searchText, itemsNumber) {
        const endpoint = this.apiURL + 'search?part=id,snippet&q=' + searchText + '&key=' + this.apiToken + '&maxResults=' + itemsNumber + '&type=video&pageToken=' + page;

        const answer = await axios.get(endpoint).then((result) => {
            const apiData = result.data;

            let output = {
                nextPageToken: apiData.nextPageToken,
                pageQuantity: this.getNumberOfPages(apiData),
                results: apiData.items
            }
            return output;
        }).catch((error) => {
            return 'error';
        })

        return answer;
    }

    getNumberOfPages(apiData) {
        return Math.round(parseFloat(apiData.pageInfo.totalResults) / parseFloat(apiData.pageInfo.resultsPerPage));
    }

    async getVideoInfo(videoId) {
        const endpoint = this.apiURL + 'videos?id=' + videoId + "&part=snippet,statistics&key=" + this.apiToken;

        return await axios.get(endpoint).then((result) => {
            return result.data
        }).catch((error) => {
            return 'error'
        }
        );
    }

}