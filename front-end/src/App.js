import React, {  useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import debounce from "lodash/debounce";
import VideoList from './components/VideoList';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Videologo from './img/VideoLogo.png'

const useStyles = makeStyles({
  searchBar: {
    
  },
  container:{
    textAlign: "center",
    justifyContent: "center",
    '& img': {
      height: 'auto',
      width: 'auto',
      '@media (max-width: 600px)':{
        width: "340px",
        height: "160px",
      }
    },
    '& input': {
      margin: 5,
      padding: 5,
      width: '250px',
      height: '30px',
    }
  },
  hidder:{
    marginTop: '150px',
  }
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
          maxResults: 12,
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
    <Container 
    className={classes.container}
    justify="center"
    alignItems="center"
    >
      <Grid>
        <img src={Videologo} />
      </Grid>
      <div></div>
      <Grid item className={classes.searchBar, !videos? classes.hidder : ''} xs={12} >
        <input
          type="text"
          placeholder="pesquisa..."
          onChange={searchHandler}
        />
      </Grid>

      {!videos ? 
      <h1>bem-vindo</h1> 
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
