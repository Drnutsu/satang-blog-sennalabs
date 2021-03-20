import StoryblokClient from 'storyblok-js-client'
import { STORYBLOK_TOKEN } from '../constants/env'

const StoryblokAPIService = new StoryblokClient({
  accessToken: STORYBLOK_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export { StoryblokAPIService }
