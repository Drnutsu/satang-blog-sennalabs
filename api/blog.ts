import { get } from './api-creator'

// import { configSelectors } from '../store/config'
// import { store } from '../store'

// const getCurrentLang = () => {
//   return configSelectors.language(store.getState())
// }

function getHighlightBlogs() {
  return get({ url: 'stories', params: { with_tag: ['highlight'] } })
}

function getHomePageComponent(lang: string) {
  return get({
    url: `stories/${lang ? `${lang}/` : ''}home`,
    params: {
      resolve_relations:
        'HeroBanner.categories,HeroBanner.featured_articles,HomeBody.top_article_section,HomeBody.last_articles_top',
    },
  })
}

const blogsApi = {
  getHighlightBlogs,
  getHomePageComponent,
}

export default blogsApi
