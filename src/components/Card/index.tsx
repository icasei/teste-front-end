import React from 'react'
import * as Styled from './styles'
import { Card as Crd, Typography, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Card(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();

  const searchType = props.videoData.id.kind;
  const videoId = props.videoData.id.videoId;
  const videoThumbnailUrl = props.videoData.snippet.thumbnails.high.url;
  const videoTitle = props.videoData.snippet.tittle;
  const videoDescription = props.videoData.snippet.description;
  const channelTittle = props.videoData.snippet.channelTitle;

  function handleClick(){
    history.push(`/watch/${videoId}`)
  }

  return (
    <Styled.Container>
      <Crd>
        <CardActionArea component='a' onClick={handleClick}>
          <CardMedia 
            component='img'
            alt={videoTitle}
            height='140'
            image={videoThumbnailUrl}
            title={videoTitle}
          />
          <CardContent>
            <Styled.TypographyTitle gutterBottom variant='h5' component='h2'>
              {videoTitle}
            </Styled.TypographyTitle>
            {searchType == 'youtube#video' ? <Typography variant='subtitle1' component='h4'>
              {channelTittle}
            </Typography> : null }
            <Styled.TypographyS variant='body2' color='textSecondary' component='p'>
              {videoDescription}
            </Styled.TypographyS>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' onClick={handleClick}>
            Detalhes do vídeo
          </Button>
        </CardActions>
      </Crd>
    </Styled.Container>
  )
}

export default Card
