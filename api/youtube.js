import { socialLink } from 'constants/all'
import { GOOGLE_CLIENT_ID } from 'constants/env'
import { get } from './api-creator'

function fetchLatestVideoMeSatang() {
  const channelUrl = socialLink.youtube.split('/')
  const channelID = channelUrl[channelUrl.length - 1]
  return get(`https://www.googleapis.com/youtube/v3/search`, {
    part: 'snippet',
    maxResults: 1,
    order: 'date',
    type: 'video',
    channelId: channelID,
    key: GOOGLE_CLIENT_ID,
  })
}

export default {
  fetchLatestVideoMeSatang,
}
