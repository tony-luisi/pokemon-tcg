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
    if (this.props.deck){
      deck = this.props.deck.toJS()
    }
    return (
      <div className="player">
        <h1>Player!</h1>
        {deck.map(function(card, i){
          return <Card key={i} {...card}/>
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    deck: state.deck
  }
}

export default connect(
  mapStateToProps
)(Player)
