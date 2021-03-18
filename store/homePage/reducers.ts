import { createActions, handleActions } from 'redux-actions'
import { AnyAction } from 'redux'
// import { AnyAction } from 'redux'

const options = {
  prefix: 'HOMEPAGE',
}

type BlogActionsType = Record<string, any>

export const homePageComponentActions: BlogActionsType = createActions(
  {
    FETCH: undefined,
    SUCCESS: undefined,
    FAILURE: undefined,
    UPDATE: {},
  },
  options,
)

export const homePageComponentReducer = handleActions(
  {
    [homePageComponentActions.fetch]: (state: any) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [homePageComponentActions.success]: (state: any, action: AnyAction) => ({
      ...state,
      blogs: action.payload.story.content.articles,
      loading: false,
      error: null,
    }),
  },
  { blogs: [] },
  options,
)
