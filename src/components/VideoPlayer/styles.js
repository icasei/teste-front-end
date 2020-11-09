import styled from 'styled-components'

export const VideoTitle = styled.div`
  @media only screen and (min-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 32px;
    height: 44px;
    width: 70%;
    float: right;
    margin-right: 15%;
    text-overflow: scale;
    max-height: 44px;
    max-width: 70%;
  }

  @media only screen and (max-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 32px;
    height: 44px;
    width: 70%;
    float: right;
    margin-right: 15%;
    max-width: 44px;
    max-width: 70%;
    font-size: 120%;

  }
`

export const VideoPlayer = styled.iframe`
  @media only screen and (min-width: 800px) {
    margin-top: 20px;
    width: 60%;
    float: left;
    margin-left: 15%;
    height: calc(60vw * 9 / 16)
  }

  @media only screen and (max-width: 800px) {
    margin-top: 35px;
    width: 90%;
    margin-left: 5%;
    height: calc(95vw*9/16);
  }
`

export const ChannelName = styled.div`
  @media only screen and (min-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    width: 30%;
    float: left;
    margin-left: 15%;
    margin-top: 5px;
  }

  @media only screen and (max-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    width: 45%;
    float: left;
    margin-left: 5%;
    margin-top: 5px;
  }
`

export const ScorePanel = styled.div`
  @media only screen and (min-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    width: 30%;
    float: left;
    margin-left: 0%;
    margin-top: 5px;
    text-align: end;
  }

  @media only screen and (max-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    width: 45%;
    float: right;
    margin-right: 5%;
    margin-top: 5px;
    text-align: end;
  }
`;

export const VideoDescription = styled.div`
  @media only screen and (min-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 20px;
    width: 60%;
    float: left;
    margin-left: 15%;
    text-align: justify;
  }

  @media only screen and (max-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 20px;
    width: 90%;
    float: left;
    margin-left: 5%;
    text-align: justify;
  }
`

export const ViewsPanel = styled.div`
  @media only screen and (min-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 10px;
    width: 60%;
    float: left;
    margin-left: 15%;
    text-align: justify;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 800px) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 10px;
    width: 90%;
    float: left;
    margin-left: 5%;
    text-align: justify;   
    margin-bottom: 10px;
  }

`



