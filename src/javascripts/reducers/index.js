 export default function reducer(state = {}, action){
  switch (action.type){
    case "RECEIVE_PLAYER_DECK":
      return Object.assign({}, state, {deck: action.deck})
    case "NEW_PLAYER":
      return Object.assign({}, state, {player: {name: action.name, score: 0}})
    default:
      return state;
  }
}
