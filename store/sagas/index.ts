import { all, fork } from 'redux-saga/effects'
import { configSagas } from 'store/config'

export default function* rootSaga() {
  yield all([fork(configSagas.watchUpdateCurrency)])
}
