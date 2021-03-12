import { CombinedState, combineReducers } from 'redux'
import { Action } from 'redux-actions'

import { configReducer } from 'store/config'
import { highlightBlogReducer } from 'store/highlightsBlog'

const appReducer = combineReducers({
  config: configReducer,
  highlightBlog: highlightBlogReducer,
})

const rootReducer = (
  state: CombinedState<{ config: any; highlightBlog: any }> | undefined,
  action: Action<any>,
) => {
  return appReducer(state, action)
}

const reducers = rootReducer

export default reducers
