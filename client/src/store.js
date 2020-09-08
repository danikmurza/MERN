import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from './reducers'


const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState())
  return next(action)
}

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }
  
  return next(action)
}

const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25})

const store = createStore(reducer, composeEnhancers(applyMiddleware(
  thunkMiddleware, stringMiddleware, logMiddleware)))


export default store
