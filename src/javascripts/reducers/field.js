
import {
  REMOVE_CARD, RECEIVE_RESULT
} from '../constants/ActionTypes'

const initialState = { result: {}, round: 0, deck: [] }

export default function field(state = initialState, action){
  switch (action.type){
    case RECEIVE_RESULT:
      return Object.assign({}, state, { result: action.result ,round: action.result.round ,deck: state.deck.concat([action.result.computerCard, action.result.playerCard])})
    default:
      return state;
  }
}
