import {combineReducers} from 'redux'

import search, {SearchState} from './search'
import card, {CardState} from './card'

export interface States{
  search: SearchState,
  card: CardState
}

export default combineReducers({
  search,
  card
})