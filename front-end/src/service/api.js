import axios from 'axios';
const KEY = 'AIzaSyA4ELBqvbT_O4q5v6kO7dH3VGvNOOF8mKs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})
