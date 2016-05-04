import { combineReducers } from 'redux'
import { default as deck } from './deck'
import { default as player } from './player'
import { default as field } from './field'

export default combineReducers({
  deck,
  player,
  field
})
