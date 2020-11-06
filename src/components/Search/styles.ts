import styled from 'styled-components'
import{ Paper } from '@material-ui/core'

export const Container = styled(Paper)`
  display: flex;
  padding: 2px 20px;
  max-width: 650px;
  flex: 1;
  .MuiInputBase-root {
      flex: 1;
  }
`