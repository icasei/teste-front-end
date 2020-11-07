export interface CardState{
  cardSaved: any
}

const initialState: CardState = {
  cardSaved: null
}

export enum CardActionType{
  GET_CARD,
}
interface CardAction{
  type: CardActionType
  cardSaved: any
}

export default function CardReducer(
  state = initialState,
  action: CardAction
) {
  switch(action.type) {
    case CardActionType.GET_CARD:
      return {
        ...state,
        cardSaved: action.cardSaved
      }
    default:
      return state  
  }
}