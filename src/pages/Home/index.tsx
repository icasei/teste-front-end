import React, { useState, useEffect} from 'react'
import * as Styled from './styles'
import { GridList, GridListTile, CircularProgress } from '@material-ui/core'
import Search from '../../components/Search'
import { useSelector, useDispatch } from 'react-redux'
import { States } from '../../store/reducers'
import Card from '../../components/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getSearchData } from '../../utils/api'
import { SearchActionType } from '../../store/reducers/search'

const initialStateVideos: any[] = [];

function Home() {
  const searchState = useSelector((state: States) => state.search)
  const dispatch = useDispatch()
  const [videos, setVideos]: any[] = useState(initialStateVideos)
  const [hasMore, setHasMore] = useState(false)
  const [term, setTerm] = useState('')

  useEffect(() => {
    if(searchState.searchResult) {
      setVideos([
        ...videos,
        ...searchState.searchResult.items
      ])
      if(searchState.searchResult.nextPageToken) {
        setHasMore(true)
      }
    }
  }, [searchState])

  function getNextPage() {
    dispatch(getSearchData(searchState.searchTerm, searchState.searchResult.nextPageToken))
  }

  function onClickSearch() {
    if (searchState.isSearching){
      setVideos(initialStateVideos)
      dispatch({
        type: SearchActionType.DELETE
      })
    }
    dispatch(getSearchData(term))
    dispatch({
      type: SearchActionType.ON_SEARCH,
      searchTerm: term
    })
  }

  useEffect(() => {
  
  }, [videos])

  return (
    <Styled.Background>
      <Styled.ContainerS isSearching={searchState.isSearching}>
        <Search
          placeholder='Pesquisar'
          onClickSearch={onClickSearch}
          term={term}
          setTerm={setTerm}
        />
      </Styled.ContainerS>
      { searchState.searchResult ?
        <Styled.CardS>
          <InfiniteScroll
            dataLength={videos.length}
            next={getNextPage}
            hasMore={hasMore}
            loader={<CircularProgress/>}
            style={{ overflow: 'none'}}
          >
            <GridList cellHeight={364} spacing={20}>
              {videos.map((data: any) => {
                return(
                  <GridListTile>
                    <Card videoData={data} key={data.id.videoId} />
                  </GridListTile>
                )
              })}
            </GridList>
          </InfiniteScroll>
        </Styled.CardS>
      : null }
    </Styled.Background>
  )
}

export default Home
