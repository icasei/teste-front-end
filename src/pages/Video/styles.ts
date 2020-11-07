import styled from 'styled-components'
import { Container } from '@material-ui/core'
import Colors from '../../utils/constants/colors'

export const ContainerS = styled(Container)`
  height: 100%;
  padding-top: 40px;
  &.MuiContainer-root{
      padding-left: 100px;

  }
  .custom-app-bar{
      .MuiButtonBase-root{
          position: absolute;
          left: 20px;
          top: 33px;
      }
  }
`

export const Background = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(120deg, ${Colors.Background} 0%, ${Colors.BackgroundLinear} 100%)
`