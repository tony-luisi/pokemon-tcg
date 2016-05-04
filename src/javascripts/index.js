import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getPlayerDeck } from './actions'
import { List, Map } from 'immutable'
import Player from './components/App/Player'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}/>
      <Route path='/start' component={Player} />
    </Router>
  </Provider>
  , document.getElementById('main'))
