/**
 * Created by iampamungkas on 6/20/17.
 */
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/reducer'
import { autoRehydrate } from 'redux-persist'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import screenTracking from "../middleware/scrennTracking"

const loggerMiddleware = createLogger()
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      autoRehydrate(),
      applyMiddleware(
        screenTracking,
        thunkMiddleware,
        // loggerMiddleware,
        middleware,
      ),
    ),
  )
}
