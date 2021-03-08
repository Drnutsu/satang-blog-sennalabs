import { get, put } from './api-creator'

function fetchLatestNotification() {
  return get('/notifications/', { offset: 0, limit: 10 })
}

function updateLastNotificationReadTime() {
  return put('/notifications/', {
    last_notification_read_at: new Date().toISOString(),
  })
}

const notificationApi = {
  fetchLatestNotification,
  updateLastNotificationReadTime,
}

export default notificationApi
