import { takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { configActions } from './reducers'

function* goToNewPage(action: AnyAction) {
  console.log('action', action)
  yield
  // const { oldLanguage, language, history, location } = action.payload
  // if (history) {
  //   yield call(history.replace, {
  //     ...location,
  //     pathname: location.pathname.replace(`/${oldLanguage}/`, `/${language}/`),
  //     search:
  //       location.search?.indexOf('redirect_uri') > 0
  //         ? location.search.replace(`/${oldLanguage}/`, `/${language}/`)
  //         : location.search,
  //   })
  // }
}

function* watchUpdateCurrency() {
  yield takeEvery(configActions.update.currency.toString(), goToNewPage)
}

const configSagas = {
  watchUpdateCurrency,
}

export default configSagas
