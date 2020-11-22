import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 340,
      minWidth:300,
      maxHeight:500,
      minHeight:300,
      padding: 5,
      marginL: 5,
    },
    media: {
      height: 140,
    },
    container: {
        padding: 5,
    }
  });

const VideoItemList = (props) => {
    const video = props.video;
    const classes = useStyles();
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <Grid 
        container 
        className={classes.container}
        lg={3} md={4} sm={6} xs={12} >
          <Link to={`detalhes/${video.id.videoId}`}>
            <Card className={classes.root}>
              <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image={imageUrl}
                  title="Contemplative Reptile"
              />
              <CardContent>
                  <Typography gutterBottom variant="h6" component="h5">
                      {video.snippet.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
              <Button  size="small" color="primary">
                  detalhes
              </Button>
              </CardActions>
            </Card>
          </Link>
      </Grid>
    );
};

export default VideoItemList;
