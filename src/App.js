import React, { Component } from 'react'
import { Provider } from 'react-redux'

import setupStore from 'redux/setup'
import Root from 'containers/Root'

import 'styles/styles.css'

const store = setupStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App
