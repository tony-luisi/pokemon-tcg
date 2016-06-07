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
        <h3>{pokemon.name}</h3>
        <p>Attack: {pokemon.attack}</p>
        <p>Defence: {pokemon.defense}</p>
        {/*<p>pokemon id: {pokemon.id}</p>
        <p>card id: {this.props.cardID}</p>*/}
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
