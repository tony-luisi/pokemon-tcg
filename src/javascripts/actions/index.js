import {get} from 'superagent'
import * as types from '../constants/ActionTypes'
import { List, fromJS } from 'immutable'

function receivePlayerDeck(deck){
  return {
    type: types.RECEIVE_PLAYER_DECK,
    deck: deck
  }
}

export function newPlayer(playerName){
  return {
    type: types.NEW_PLAYER,
    name: playerName
  }
}

export function getPlayerDeck() {
  return dispatch => {
    get('/newGame')
      .end((err, res) => {
        var deck = fromJS(JSON.parse(res.text))
        dispatch(receivePlayerDeck(deck))
      })
  }
}
