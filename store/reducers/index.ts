import { CombinedState, combineReducers } from 'redux'
import { Action } from 'redux-actions'

import { configReducer } from 'store/config'
import { homePageComponentReducer } from 'store/homePage'

const appReducer = combineReducers({
  config: configReducer,
  homePage: homePageComponentReducer,
})

const rootReducer = (
  state: CombinedState<{ config: any; homePage: any }> | undefined,
  action: Action<any>,
) => {
  return appReducer(state, action)
}

const reducers = rootReducer

export default reducers
