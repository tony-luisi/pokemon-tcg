 export default function reducer(state = {}, action){
  switch (action.type){
    case "RECEIVE_PLAYER_DECK":
      return Object.assign({}, state, {deck: action.deck})
    default:
      return state;
  }
}
