import React, { Component } from 'react'
import { Provider } from 'react-redux'

import setupStore from 'redux/setup'
import Board from 'containers/Board'

import 'styles/styles.css'

const store = setupStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    )
  }
}

export default App
