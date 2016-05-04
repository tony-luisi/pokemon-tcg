import {
  RECEIVE_RESULT
} from '../constants/ActionTypes'

const initialState = { score: 0 }

export default function computer(state = initialState, action){
  switch (action.type){
    case RECEIVE_RESULT:
      return Object.assign({}, state, {score: action.result.computerScore})
    default:
      return state;
  }
}
