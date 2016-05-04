import React, { Component } from 'react'
import Card from './Player/Card'
import {connect} from 'react-redux'

export default class Computer extends Component{
  render(){
    return(
      <div>
        <h1>Computer</h1>
        <h2>Score: {this.props.computer.score}</h2>
      </div>


    )
  }
}

function mapStateToProps(state){
  return {
    computer: state.computer
  }
}

export default connect(
  mapStateToProps
)(Computer)
