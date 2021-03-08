import { CombinedState, combineReducers } from 'redux'
import { Action } from 'redux-actions'

import { configReducer } from 'store/config'

const appReducer = combineReducers({
  config: configReducer,
})

const rootReducer = (
  state: CombinedState<{ config: any }> | undefined,
  action: Action<any>,
) => {
  return appReducer(state, action)
}

const reducers = rootReducer

export default reducers
