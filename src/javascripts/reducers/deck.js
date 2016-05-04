
import {
  RECEIVE_PLAYER_DECK, RECEIVE_RESULT, REMOVE_CARD
} from '../constants/ActionTypes'

const initialState = []

export default function deck(state = initialState, action){
  switch (action.type){
    case RECEIVE_PLAYER_DECK:
      return action.deck
    case REMOVE_CARD:
      return state.filter(function(card, i){
        return i !== action.cardID
      })
    default:
      return state;
  }
}
