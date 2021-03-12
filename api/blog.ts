import { get } from './api-creator'

function getHighlightBlogs() {
  return get({ url: 'stories', params: { with_tag: ['highlight'] } })
}

const blogsApi = {
  getHighlightBlogs,
}

export default blogsApi
