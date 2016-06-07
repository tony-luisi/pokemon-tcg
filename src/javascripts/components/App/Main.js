import React, { Component } from 'react'
import Player from './Player'
import Field from './Field'
import Computer from './Computer'

export default class Main extends Component{
  render(){
    return(
      <div>
        <Player />
        <Field />
        <Computer />
      </div>


    )
  }
}
