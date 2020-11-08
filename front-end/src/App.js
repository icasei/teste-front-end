import React, { useState, useEffect } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyCuAaFQ2Ex2EW1TS_UdzAgxgXQkA0WcSxk';


const App = () => {
  const [videos, setVideos] = useState([]);
  const [sldVideo, setSldVideo] = useState(null);

  useEffect(() => {
    fetchResource('Naruto');
  }, [])

  const fetchResource = async (item) => {
      await YTSearch({key: API_KEY, term: item}, (data) => {
          setVideos(data);
          setSldVideo(data[0])
      });
  }

  return (
    <div>
      <SearchBar onSearchTermChange={searchTerm => fetchResource(searchTerm)}/>
      <VideoDetail video={sldVideo}/>
      <VideoList onVideoSelect={selected => setSldVideo(selected)} videos={videos} />
    </div>
  );
}

export default App;
