import styled from 'styled-components'
import { Card, CardContent, CardHeader, CardMedia, Container, Button } from '@material-ui/core'
import Color from '../../utils/colors'

export const ContainerS = styled(Container)`
  margin-bottom: 10px;

  .link{
    text-decoration: none;
    }
`
export const CardS = styled(Card)`
  min-height: 480px;
  max-height: 480px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const CardMediaS = styled(CardMedia)`
  height: 270px;
`
export const CardHeaderS = styled(CardHeader)`
  height: auto;
`

export const CardContentS = styled(CardContent)`
  height: 50px;
`
export const ButtonS = styled(Button)`
    color: ${Color.White};
    background-color: ${Color.Malibu};
`
