import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Body = styled.div`
  overflow: hidden;
  border: solid 1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 7px;
  flex: 1 1 300px;
  max-width: 300px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 14px 0;
  @media (min-width: 400px) {
    margin: 7px;
  }
`

const Picture = styled.img`
  border-radius: 4px;
  height: 200px;
  width: 100%;
  /* object-fit: fill; */
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 7px 0;
`

const Subtitle = styled.div`
  margin: 3px 0;
  font-size: 16px;
  font-weight: bold;
`

const Description = styled.div`
  overflow: hidden;
  width: 100%;
  font-size: 14px;
  margin: 7px 0;
`

const Footer = styled.div`
  text-transform: uppercase;
  margin: 7px 0;
`

const Linker = styled(Link)`
  text-decoration: none;
`

export default {
  Body,
  Picture,
  Title,
  Subtitle,
  Description,
  Footer,
  Linker
}
