import styled from 'styled-components'
import { KeyboardArrowLeftOutlined } from '@material-ui/icons'
import Colors from '../../utils/colors'

export const Arrow = styled(KeyboardArrowLeftOutlined)`
  border-style: solid;
  border-color: ${Colors.Chambray};
  border-width: 4px;
  color: ${Colors.Malibu};

  :hover{
  cursor: pointer;
  }
`


