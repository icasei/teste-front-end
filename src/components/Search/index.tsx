import React, { useState } from 'react'
import{IconButton, InputBase } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import * as Styled from './styles'

const Search = (props: {onClickSearch: () => any; placeholder: string, term: string, setTerm:(e:any) => any }) => {

  const { onClickSearch, placeholder, term, setTerm} = props;

  return (
    <Styled.Container>
      <InputBase
        placeholder={placeholder}
        value={term}
        onChange={e => setTerm(e.target.value)}
        onKeyPress={e => (e.which == 13 ? onClickSearch(): null)} //executa a função ao teclar ENTER ou RETURN
      />
      <IconButton onClick={() => onClickSearch()}>
        <SearchIcon/>
      </IconButton>
    </Styled.Container>
  )
}