import { createActions, handleActions } from 'redux-actions'
import { AnyAction } from 'redux'
// import { AnyAction } from 'redux'

const options = {
  prefix: 'HIGH_LIGHTS_BLOG',
}

type blogActionsType = Record<string, any>

export const highlightBlogActions: blogActionsType = createActions(
  {
    FETCH_HIGHLIGHTS: undefined,
    SUCCESS: undefined,
    FAILURE: undefined,
    UPDATE: {},
  },
  options,
)

export const highlightBlogReducer = handleActions(
  {
    [highlightBlogActions.fetchHighlights]: (state: any) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [highlightBlogActions.success]: (state: any, action: AnyAction) => ({
      ...state,
      blogs: action.payload.stories,
      loading: false,
      error: null,
    }),
  },
  { blogs: [] },
  options,
)
