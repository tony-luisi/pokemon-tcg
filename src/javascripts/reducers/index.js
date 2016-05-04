import { combineReducers } from 'redux'
import { default as deck } from './deck'
import { default as player } from './player'

export default combineReducers({
  deck,
  player
})
