import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const logger = (createLogger as any)()

export const history = createBrowserHistory()

const dev = process.env.NODE_ENV === 'development'

let middleware = dev ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)

if (dev) {
  middleware = composeWithDevTools(middleware)
}


export const store = createStore(rootReducer(history), {}, middleware) as any

