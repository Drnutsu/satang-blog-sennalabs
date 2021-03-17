import { call, takeEvery, put } from 'redux-saga/effects'
import { blogApi } from 'api'
import { highlightBlogActions } from './reducers'

function* fetchHighlights() {
  try {
    const highlightBlogs = yield call(blogApi.getHighlightBlogs)
    console.log('highlightBlogs', highlightBlogs)
    yield put(highlightBlogActions.success(highlightBlogs))
  } catch (error) {
    console.log('errorr!!!!', error)
    yield put(highlightBlogActions.failure(error))
  }
}

function* watchFetchHighlightsBlog() {
  yield takeEvery(
    highlightBlogActions.fetchHighlights.toString(),
    fetchHighlights,
  )
}

const highlightsBlogSagas = {
  watchFetchHighlightsBlog,
}

export { highlightsBlogSagas }
