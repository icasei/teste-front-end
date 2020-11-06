import React, {useEffect} from 'react'
import * as Styled from './styles'
import YouTubePlayer from 'youtube-player'

function Player(props:any) {
  const {videoId} = props
  
  useEffect(() => {
    iframeOK();
  }, [])

  function iframeOK(){
    const player = YouTubePlayer('video-player');
    player.loadVideoById(videoId)
  }

  return <Styled.VideoPlayer id='video-player'/>
}

export default Player

