import React, { Component } from 'react'
import Card from './Player/Card'
import {connect} from 'react-redux'

export default class Field extends Component{
  render(){
    return(
      <div>
        <h1>Field</h1>
        <div className="deck">
          {this.props.deck.map(function(card, i){
            return <Card key={i} cardID={i} {...card}/>
          })}
        </div>
      </div>


    )
  }
}

function mapStateToProps(state){
  return {
    deck: state.field
  }
}

export default connect(
  mapStateToProps
)(Field)
