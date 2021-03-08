import { get } from './api-creator'

function fetchTopProducts() {
  return get(
    'https://www.binance.com/exchange-api/v1/public/asset-service/product/get-top-products',
  )
}

function fetch24hTicker() {
  return get('/v3/ticker/24hr')
}

const topProductsApi = { fetchTopProducts, fetch24hTicker }

export default topProductsApi
