import { call, takeEvery, put, select } from 'redux-saga/effects'
import { blogApi } from 'api'
import { homePageComponentActions } from './reducers'
import { language } from '../config/selectors'

function* fetchHomePageComponent() {
  const lang = yield select(language)
  try {
    const homePageComponent = yield call(blogApi.getHomePageComponent, lang)
    console.log('homePageComponent', homePageComponent)
    const {
      categories,
      featured_articles: featuredArticles,
    } = homePageComponent.story.content.body[0]

    const {
      last_articles_top: lastArticlesTop,
      top_article_section: topArticleSection,
    } = homePageComponent.story.content.body[1]

    yield put(homePageComponentActions.success(homePageComponent))
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
