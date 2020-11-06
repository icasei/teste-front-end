import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Container = styled.div`
  height: 100%;
  .MuiCard-root{
    height: 100%;

    .MuiCardContent-root{
      padding-bottom: 0;
    }
  }
  .MuiCardActionArea-root{
      height: 90%;
      .MuiCardMedia-root{
          height: 50%;
      }
      .MuiCardContent-root{
          height: 50%;
      }
  }
  .MuiCardActions-root{
     height: 10%;
  }
`
export const TypographyS = styled(Typography) <any>`
  overflow: hidden;
`
export const TypographyTitle = styled(Typography) <any>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`