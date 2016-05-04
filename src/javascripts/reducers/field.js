
import {
  REMOVE_CARD
} from '../constants/ActionTypes'

const initialState = []

export default function field(state = initialState, action){
  switch (action.type){
    case REMOVE_CARD:
      console.log('add card to field', action)
      return state.concat([action.card])
    default:
      return state;
  }
}
