import React, {  useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import debounce from "lodash/debounce";
import{ VideoList, VideoList1, VideoList2 } from './components/VideoList';
import { Box, Button, Container, Grid, Icon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Videologo from './img/VideoLogo.png'
import { Footer } from './components/Footer';

const useStyles = makeStyles({
  boxSpace: {
    height:'50vh'
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
  const [more, setMore] = useState(0);
  const KEY = 'AIzaSyDyRShtY1aPx8Atejb65Ip_IknBZwv1JEY';
  const classes = useStyles();
  

  const fetchApi = useCallback(async (search) => {
    try {
      const res = await axios.get('https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          maxResults: 30,
          key: KEY,
          q: search,
        },
      }
      );
      setMore(0)
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
    
    function moreVideos() {
      setMore(more => more + 1)
    }

  return (
    <>
    <Container 
    className={classes.container}
    justify="center"
    alignItems="center"
    >
      <Grid>
        <img src={Videologo} />
      </Grid>
      <Grid item className={ !videos? classes.hidder : ''} xs={12} >
        <input
          type="text"
          placeholder="pesquisa..."
          onChange={searchHandler}
        />
      </Grid>

      {!videos ? 
      <Box className={classes.boxSpace}>
        <Typography variant="h1">bem-vindo</Typography>
      </Box>
      :
      <>
      <Grid item lg={12}>
        <Box component="div" display={more >=0? '': 'none'} >
            <VideoList videos={videos.items} /> 
        </Box>
        <Box component="div" display={more >=1? '': 'none'} >
          <VideoList1  videos={videos.items} /> 
        </Box>
        <Box component="div" display={more >=2? '': 'none'} >
          <VideoList2 videos={videos.items} />
        </Box>
        </Grid>
        <Grid item lg={12}>
          <Button 
          variant="contained" 
          color="primary" 
          size="large"  
          endIcon={<Icon>keyboard_arrow_down</Icon>}
          disabled={more >= 2 ? true : false}  
          onClick={moreVideos} 
          >
            Mais Videos
          </Button>
        </Grid>
      </>
    }
    </Container>
    <Footer />
    </>
  );
}

export default App;
