import styled from 'styled-components'
import {Container} from '@material-ui/core'
import { ContainerProps } from '@material-ui/core/Container'
import Colors from '../../utils/constants/colors'

interface IContainerS extends ContainerProps{
  isSearching: any
}

export const Background = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(120deg, ${Colors.Background} 0%, ${Colors.BackgroundLinear} 100%)
`

export const ContainerS = styled(Container) <IContainerS>`
  padding-top: 40px;
  height: ${props => props.isSearching ? "10%" : "100%"}; 
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  position: absolute;
  z-index: 2;
  max-width: 100% !important;
`

export const CardS = styled(Container)`
  .MuiGridList-root{
    justify-content: center;
    padding-top: 140px;
    padding-bottom: 20px;
  }

  .MuiGridListTile-root{
    width: 400px !important;
    &>div{
        overflow: visible;
    }
  }
`

