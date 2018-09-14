import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'

function setupStore(initialState = {}) {
  // middlewares and store enhancers
  const middlewares = []

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  // add redux dev tool extension
  if (process.env.NODE_ENV === 'development') {
    // enable DevTools only when rendering during development.
    if (window.devToolsExtension) {
      enhancers.push(window.devToolsExtension())
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  )

  return store
}

export default setupStore
