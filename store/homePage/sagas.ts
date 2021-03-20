import { takeEvery, put, select } from 'redux-saga/effects'
import { homePageComponentActions } from './reducers'
import { language } from '../config/selectors'

function* fetchHomePageComponent() {
  const lang = yield select(language)
  try {
    yield put(homePageComponentActions.success(lang))
  } catch (error) {
    yield put(homePageComponentActions.failure(error))
  }
}

function* watchHomePageComponent() {
  yield takeEvery(
    homePageComponentActions.fetch.toString(),
    fetchHomePageComponent,
  )
}

const homePageComponentSagas = {
  watchHomePageComponent,
}

export { homePageComponentSagas }
