import React from 'react'
import Button from '@material-ui/core/Button'

import S from './style'

const Card = ({ picture, title, subtitle, description, link }) => {
  return (
    <>
      <S.Body>
        <S.Picture src={picture} />
        <S.Title>{title}</S.Title>
        <S.Subtitle> {subtitle}</S.Subtitle>
        <S.Description>{description}</S.Description>
        <S.Footer>
          <S.Linker to={link}>
            <Button variant="contained">detalhes do vídeo</Button>
          </S.Linker>
        </S.Footer>
      </S.Body>
    </>
  )
}

export default Card
