import React, { Component } from 'react'
import Card from './Player/Card'
import {connect} from 'react-redux'

export default class Field extends Component{
  render(){
    console.log(this.props.field)
    var field = this.props.field
    return(
      <div>
        <h1>Round: {field.round}</h1>
        <h3>Winner of round: {this.props.field.result.winner}</h3>
        <div className="deck">
          {this.props.field.deck.map(function(card, i){
            return <Card key={i} cardID={i} {...card}/>
          })}
        </div>
      </div>


    )
  }
}

function mapStateToProps(state){
  return {
    field: state.field
  }
}

export default connect(
  mapStateToProps
)(Field)
