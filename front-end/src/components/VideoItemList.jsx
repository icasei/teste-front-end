import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    container: {
      padding: 5,
      '& a': {
        textDecoration: "none",
      }
    },
    root: {
      width: 320,
      height: 300,
      padding: 5,
      margin: 5,
    },
    media: {
      width: 320,
      height:180,
    },
    hiddenText: {
      whiteSpace: 'nowrap',
      width: '100%',                   
      overflow: 'hidden',              /* "overflow" value must be different from "visible" */ 
      textOverflow: 'ellipsis',
    },
    buttonStyle: {
      marginTop: "5px",
    }
  });

const VideoItemList = (props) => {
    const video = props.video;
    const classes = useStyles();
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.high.url;

    return (
      <Grid 
        container 
        className={classes.container}
        lg={4} md={4} sm={6} xs={12} >
          <Link  to={`detalhes/${video.id.videoId}`}>
            <Card className={classes.root}>
              <CardActionArea  >
              <CardMedia
                  className={classes.media}
                  image={imageUrl}
                  title="Contemplative Reptile"
              />
              <Typography  className={classes.hiddenText} variant="h6" >
                  {video.snippet.title}
              </Typography>
              <Typography  className={classes.hiddenText} variant="subtitle1" >
                  {video.snippet.channelTitle}
              </Typography>
              <Typography  className={classes.hiddenText} variant="subtitle2" >
                  {video.snippet.description}
              </Typography>
              </CardActionArea>
              <Button className={classes.buttonStyle}  size="small" variant="contained" color="primary">
                  detalhes
              </Button>
            </Card>
          </Link>
      </Grid>
    );
};

export default VideoItemList;
