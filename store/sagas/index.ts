import { all, fork } from 'redux-saga/effects'
import { configSagas } from 'store/config'
import { highlightsBlogSagas } from 'store/highlightsBlog'

export default function* rootSaga() {
  yield all([fork(configSagas.watchUpdateCurrency)])
  yield all([fork(highlightsBlogSagas.watchFetchHighlightsBlog)])
}
