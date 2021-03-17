import { all, fork } from 'redux-saga/effects'
import { configSagas } from 'store/config'
import { homePageComponentSagas } from 'store/homePage'

export default function* rootSaga() {
  yield all([fork(configSagas.watchUpdateCurrency)])
  yield all([fork(homePageComponentSagas.watchHomePageComponent)])
}
