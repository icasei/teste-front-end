import React from 'react'
import { OutlinedInput, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MoodBadOutlinedIcon from '@material-ui/icons/MoodBadOutlined'
import { TweenLite } from 'gsap'

import S from './style'


const HomePage = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [isFetch, setIsFetch] = React.useState(false)
  const [results, setResults] = React.useState(null)

  const refSearch = React.useRef()

  React.useEffect(() => {
    if (isFetch) {
      TweenLite.to(refSearch.current, 0.2, { marginTop: '7px' })
    }
  }, [isFetch])

  const handleSearch = (event) => {
    event.preventDefault()

    console.log(inputValue)
    if (!isFetch) {
      setIsFetch(true)
    }
  }

  const handleChange = ({ target: { value } }) => {
    setInputValue(value)
  }


  return (
    <>
      <S.Body id='home'>
        <S.Search ref={refSearch} onSubmit={handleSearch}>
          <OutlinedInput
            fullWidth
            labelWidth={0}
            style={{}}
            type='search'
            placeholder='Pesquisar'
            onChange={handleChange}
            value={inputValue}
            endAdornment={
              <InputAdornment position='end'>
                <SearchIcon onClick={handleSearch} />
              </InputAdornment>
            }
          />
        </S.Search>
        {isFetch &&
          (results ? (
            <S.Result>
              <div>result</div>
            </S.Result>
          ) : (
              <S.NoResult>
                <h4>
                  <MoodBadOutlinedIcon fontSize='large' />
                </h4>
                <h4>Não encontramos vídeos com o termo buscado.</h4>
                <h4>Utilize outras palavras-chave.</h4>
              </S.NoResult>
            ))}
      </S.Body>
    </>
  )
}

export default HomePage