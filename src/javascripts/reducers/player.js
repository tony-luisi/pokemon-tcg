import {
  NEW_PLAYER, RECEIVE_RESULT
} from '../constants/ActionTypes'

const initialState = { name: "player", score: 0 }

export default function player(state = initialState, action){
  switch (action.type){
    case NEW_PLAYER:
      return Object.assign({}, state, {name: action.name})
    case RECEIVE_RESULT:
      return Object.assign({}, state, {score: action.result.playerScore})
    default:
      return state;
  }
}
