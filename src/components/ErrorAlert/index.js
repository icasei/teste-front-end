import React, { Component } from 'react';
import { SentimentDissatisfied } from '@material-ui/icons'
import * as Styled from './styles'


export default class ErrorAlert extends Component {
    render() {
        return (
            <Styled.Grid>
                <Styled.Icon>
                    <SentimentDissatisfied style={{
                        width: '100px', height: '100px'
                    }} />
                </Styled.Icon>
                <Styled.Text>
                    <p> Não encontramos vídeos</p>
                    <p>com o termo buscado.</p>
                    <br />
                    <p>Utilize outras palavras-chave</p>     
                </Styled.Text>
            </Styled.Grid>
        )
    }
}
