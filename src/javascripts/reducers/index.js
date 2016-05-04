import { combineReducers } from 'redux'
import { default as deck } from './deck'
import { default as player } from './player'
import { default as field } from './field'
import { default as computer } from './computer'

export default combineReducers({
  deck,
  player,
  field,
  computer
})
