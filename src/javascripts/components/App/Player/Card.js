import React, {Component} from 'react'
import {connect} from 'react-redux'
import { playCard } from '../../../actions'
import { bindActionCreators } from 'redux'

export default class Card extends Component {
  constructor(props){
    super(props)
  }

  clickCard(){
    this.props.playCard(this.props.cardID)
  }

  render(){
    var pokemon = this.props
    return (
      <div onClick={this.clickCard.bind(this)}>
        <h1>{pokemon.name}</h1>
        <h5>Attack: {pokemon.attack}</h5>
        <h5>Defence: {pokemon.defense}</h5>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    playCard: bindActionCreators(playCard, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Card)
