import get from 'lodash/get'

export const highlightBlog = (state: any) =>
  get(state, 'highlightBlog.blogs', {})
