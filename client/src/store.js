import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import timerMiddleware from 'redux-timer-middleware'
import rootReducer from './reducers'

const initialState = {}
const enhancers = []


if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunk,
    timerMiddleware
  )
)

export default store
