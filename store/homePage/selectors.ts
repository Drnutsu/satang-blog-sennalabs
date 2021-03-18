import get from 'lodash/get'

export const featuredBlog = (state: any) =>
  get(state, 'homePage.featuredBlog', {})
export const categories = (state: any) => get(state, 'homePage.categories', {})
