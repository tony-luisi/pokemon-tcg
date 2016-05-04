import React, {Component} from 'react'
import Player from './App/Player'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {getPlayerDeck} from '../actions'
import { bindActionCreators } from 'redux'


export default class App extends Component {
  constructor(props){
    super(props)
  }

  start(){
    // console.log('start pressed')
    //need to add the deck to the state
    // console.log(this.props.)
    // this.props.getPlayerDeck()
    browserHistory.push('/start')
  }

  render(){
    return (
      <div>
        <h1>Welcome to the Pokemon Card Game</h1>
        <h3>Please press start</h3>
        <button onClick={this.start.bind(this)}>Start</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    getPlayerDeck: bindActionCreators(getPlayerDeck, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)
