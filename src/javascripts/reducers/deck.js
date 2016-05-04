
import {
  RECEIVE_PLAYER_DECK, RECEIVE_RESULT
} from '../constants/ActionTypes'

const initialState = []

export default function deck(state = initialState, action){
  switch (action.type){
    case RECEIVE_PLAYER_DECK:
      return action.deck
    case RECEIVE_RESULT:
      console.log('result received by deck')
      
    // case REMOVE_CARD:

    default:
      return state;
  }
}
