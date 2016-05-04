import React, {Component} from 'react'
import Card from './Player/Card'
import {connect} from 'react-redux'
import {Map} from 'immutable'

export default class Player extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var deck = []
    var player = this.props.player
    if (this.props.deck){
      deck = this.props.deck.toJS()
    }
    return (
      <div className="player">
        <h1>{player.name}</h1>
        <h2>Score: {player.score}</h2>
        {deck.map(function(card, i){
          return <Card key={i} {...card}/>
        })}
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
