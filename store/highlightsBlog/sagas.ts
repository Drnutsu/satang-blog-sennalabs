import { call, takeEvery, put } from 'redux-saga/effects'
import { highlightBlogActions } from './reducers'
import { blogApi } from 'api'

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

export default highlightsBlogSagas
