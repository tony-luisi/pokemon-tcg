import {get, post} from 'superagent'
import * as types from '../constants/ActionTypes'

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
        var deck = JSON.parse(res.text)
        dispatch(receivePlayerDeck(deck))
      })
  }
}


export function removeCard(cardID, card) {
  return {
    type: types.REMOVE_CARD,
    cardID: cardID,
    card: card
  }

}


export function playCard(cardID){
  return dispatch => {
    post('/playCard')
      .send({})
      .end((err, res) => {
        var result = JSON.parse(res.text)
        dispatch(receiveResult(result))
      })
  }
}

function receiveResult(result){
  return {
    type: types.RECEIVE_RESULT,
    result: result
  }
}
