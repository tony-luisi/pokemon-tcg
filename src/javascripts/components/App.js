import React, {Component} from 'react'
import Player from './App/Player'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {getPlayerDeck, newPlayer} from '../actions'
import { bindActionCreators } from 'redux'


export default class App extends Component {
  constructor(props){
    super(props)
  }

  start(){
    this.props.getPlayerDeck()
    this.props.newPlayer(this.refs.name.value)
    browserHistory.push('/start')
  }

  render(){
    return (
      <div>
        <h1>Welcome to the Pokemon Card Game</h1>
        <h3>Enter name and press start</h3>
        <input type="text" ref='name'></input>
        <button onClick={this.start.bind(this)}>Start</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    getPlayerDeck: bindActionCreators(getPlayerDeck, dispatch),
    newPlayer: bindActionCreators(newPlayer, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)
