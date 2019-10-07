import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import S from './style'


const Card = ({
  picture,
  title,
  subtitle,
  description,
  link
}) => {
  return (
    <>
      <S.Body>
        <S.Picture src={picture} />
        <S.Title>{title}</S.Title>
        <S.Subtitle> {subtitle}</S.Subtitle>
        <S.Description>{description}</S.Description>
        <S.Footer>
          <Link to={link}>
            <Button variant='contained' ><S.Details> detalhes do vídeo</S.Details></Button>
          </Link>
        </S.Footer>
      </S.Body>
    </>
  )
}

export default Card