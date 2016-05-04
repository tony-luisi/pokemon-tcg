import React, {Component} from 'react'

export default class Card extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    var pokemon = this.props
    return (
      <h1>{pokemon.name}</h1>

    )
  }
}
