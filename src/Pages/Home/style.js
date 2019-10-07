import styled from 'styled-components'

const Body = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  flex-direction: column;
`

const Search = styled.form`
  margin-top: 45vh;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`
const Result = styled.div`
  max-width: 1200px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  @media(min-width:600px){
    align-items:unset;
    justify-content:unset;
  }
`

const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 25vh;
  width: 66%;
  text-align: center;
`

export default {
  Body,
  Search,
  Result,
  NoResult
}