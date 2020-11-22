import React, {  useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import debounce from "lodash/debounce";
import VideoList from './components/VideoList';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchBar: {
    textAlign: "center",
    padding: 10,
  },
});


const App = () => {
  const [videos, setVideos] = useState();
  const KEY = 'AIzaSyA4ELBqvbT_O4q5v6kO7dH3VGvNOOF8mKs';
  const classes = useStyles();
  

  const fetchApi = useCallback(async (search) => {
    try {
      const res = await axios.get('https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          maxResults: 10,
          key: KEY,
          q: search,
        },
      }
      );
      console.log("feact api aqui dentro do callback" ,res.data)
      setVideos(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

    const searchHandler = debounce(async (event) => {
      const { value } = event.target;
      if (value === "") return setVideos(null);
      await fetchApi(value);
    }, 1000);



  return (
    <Container>
      <Grid item className={classes.searchBar} xs={12} >
        <input
          type="text"
          placeholder="Search recommendations"
          onChange={searchHandler}
        />
      </Grid>
      {!videos ? 
      <h1>Loading...</h1> 
      :
      <>
        <Grid item lg={12}>
          <VideoList videos={videos.items} />
        </Grid>
      </>
      }
    </Container>
  );
}

export default App;
