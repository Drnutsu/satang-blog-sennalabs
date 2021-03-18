import StoryblokClient from 'storyblok-js-client'
import { STORYBLOK_PREVIEW_TOKEN } from '../constants/env'

const StoryblokAPIService = new StoryblokClient({
  accessToken: STORYBLOK_PREVIEW_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export { StoryblokAPIService }
