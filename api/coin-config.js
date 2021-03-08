import { get } from './api-creator'

function fetchCoinConfig() {
  return get('/configs/')
}

function fetchCoinRate() {
  return get('/coin-valuation/')
}

const coinConfigApi = { fetchCoinConfig, fetchCoinRate }

export default coinConfigApi
