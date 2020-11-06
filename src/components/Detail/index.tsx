import React from 'react'
import { Typography } from '@material-ui/core'
import Player from '../Player'

function Detail (props: any) {
  const { title } = props.data.snippet;

  return (
    <>
      <Typography gutterBottom variant='h5' component='h2'>
        {title}
      </Typography>
      <Player videoId={props.data.id}/>
    </>
  )
}

export default Detail
