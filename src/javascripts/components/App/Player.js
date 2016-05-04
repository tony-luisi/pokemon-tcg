import React, {Component} from 'react'
import Card from './Player/Card'
import {connect} from 'react-redux'
import {Map} from 'immutable'

export default class Player extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var player = this.props.player
    var deck = this.props.deck
    return (
      <div className="player">
        <h1>{player.name}</h1>
        <h2>Score: {player.score}</h2>
        <div className="deck">
          {deck.map(function(card, i){
            return <Card played={false} key={i} cardID={i} {...card}/>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    deck: state.deck,
    player: state.player
  }
}

export default connect(
  mapStateToProps
)(Player)
