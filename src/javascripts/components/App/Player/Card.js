import React, {Component} from 'react'

export default class Card extends Component {
  constructor(props){
    super(props)
  }

  clickCard(){
    
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
