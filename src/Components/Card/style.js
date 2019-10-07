import styled from 'styled-components'

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Picture = styled.img`
  height: 200px;
  width: 100%;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 7px 0;
`

const Subtitle = styled.div`
  margin: 3px 0;
  font-size: 18px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 16px;
  margin: 7px 0;
`

const Footer = styled.div`
  text-transform: uppercase;
`

export default {
  Body,
  Picture,
  Title,
  Subtitle,
  Description,
  Footer
}