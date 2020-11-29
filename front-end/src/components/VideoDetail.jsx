import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { Footer } from './Footer';

const useStyles = makeStyles({
  video: {
    '@media (max-width: 600px)':{
      textAlign: "center",
    }
  },
  videoIframe: {
    width: "100%",
    height: "60vh",
    '@media (max-width: 600px)':{
      width: "340px",
      height: "160px",
    }
  },
  button: {
    textDecoration: "none",
    '& button': {
      marginTop:  "20px",
      marginBottom: "20px",
    }
  },
});

const VideoDetail = () => {
    const [video, setVideo] = useState([]);
    const KEY = 'AIzaSyC2uudbtemgCziavUcyARUYPDQdQst_ZjM';
    const { params } = useRouteMatch();
    const url = `https://www.youtube.com/embed/${params.id}`;
    const classes = useStyles();

    useEffect(async () => {
        try {
          const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${params.id}`,
          {
            params: {
              part: 'snippet',
              key: KEY,
            },
          }
          );
          setVideo(res.data.items[0]);
        } catch (err) {
          console.log(err);
        }
      }, [params.id]);

    return (
        <>
        {!video ? 
        <h1> Loading.... </h1> 
        :
        <Container
        justify="flex-start"
        alignItems="flex-start">
          <Grid 
          item
          >
            <Link to='/' className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<Icon>keyboard_backspace</Icon>}
            >
              VOLTAR
            </Button>
            </Link>
          </Grid>
            <Grid container 
            lg={12}
            spacing={1} 
            >
              <Grid >
                <Typography variant="h6"  >{video.snippet?.title}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.video} >
                  <iframe className={classes.videoIframe} src={url}></iframe>
              </Grid>
              <Grid direction="row" xs={12} >
                <Typography variant="h6"  >Canal: {video.snippet?.channelTitle}</Typography>
              </Grid>
              <Grid item lg={'auto'} >
                  <Typography variant="subtitle2" xs={2}>{video.snippet?.description}</Typography>
              </Grid>
            </Grid>
        </Container>
        } 
        <Footer />
        </>
    );
};

export default VideoDetail;