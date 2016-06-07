import React, {Component} from 'react'
import {connect} from 'react-redux'
import { playCard, removeCard } from '../../../actions'
import { bindActionCreators } from 'redux'

export default class Card extends Component {
  constructor(props){
    super(props)
  }

  clickCard(){
    if(!this.props.played){
      this.props.playCard(this.props)
      this.props.removeCard(this.props.cardID, this.props)
    }
  }

  render(){
    var pokemon = this.props
    return (
      <div onClick={this.clickCard.bind(this)} className="card">
        <h1>{pokemon.name}</h1>
        <h5>Attack: {pokemon.attack}</h5>
        <h5>Defence: {pokemon.defense}</h5>
        <h5>pokemon id: {pokemon.id}</h5>
        <h5>card id: {this.props.cardID}</h5>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    playCard: bindActionCreators(playCard, dispatch),
    removeCard: bindActionCreators(removeCard, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Card)
