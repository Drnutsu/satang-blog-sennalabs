import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

/**
 * Disable hot reload for saga and reducer, because redux will not take any effect from hot reload (set from App.js)
 */
// Create hook for async sagas
// store.runSaga = sagaMiddleware.run
// store.startAbortableSaga = () => rootSaga.startSaga(sagaMiddleware)
// store.close = () => store.dispatch(END)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducers = require('./reducers').default // eslint-disable-line global-require
    store.replaceReducer(nextReducers)
  })

  module.hot.accept('./sagas', () => {
    // rootSaga.cancelSaga(store)
    require('./sagas').default.startSaga(sagaMiddleware) // eslint-disable-line global-require
  })
}
/**
 * ./ Disable hot reload for saga, because saga will not take any effect from hot reload
 */

export { store }
