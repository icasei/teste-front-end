import React, { useState, useEffect } from 'react';
import './App.css';
import FetchApi from './service/FetchApi';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const API_KEY = 'AIzaSyCuAaFQ2Ex2EW1TS_UdzAgxgXQkA0WcSxk';

const useStyles = makeStyles({
  searchBar: {
    textAlign: "center",
    padding: 10,
  },
});


const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [sldVideo, setSldVideo] = useState(null);
  const classes = useStyles();

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
    <Container>
      <Grid item className={classes.searchBar} xs={12} >
        {console.log()}
        <SearchBar onSearchTermChange={searchTerm => fetchResource(searchTerm)}/>
      </Grid>
      <Grid item className={classes.searchBar}  xs={12} lg={12}>
        <FetchApi />
        <VideoDetail video={sldVideo}/>
      </Grid>
      <Grid item lg={12}>
        <VideoList onVideoSelect={selected => setSldVideo(selected)} videos={videos} />
      </Grid>
    </Container>
  );
}

export default App;
