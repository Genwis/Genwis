/**
 * Created by iampamungkas on 6/20/17.
 */
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/reducer'
import { autoRehydrate } from 'redux-persist'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            autoRehydrate(),
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
}