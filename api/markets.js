import moment from 'moment'
import { get } from './api-creator'

function fetchProducts() {
  return get(`/v3/ticker/24hr`).then((data) => {
    return data.map((item) => {
      const [b, q] = item.symbol.split('_')
      return {
        s: item.symbol,
        c: item.lastPrice,
        o: item.openPrice,
        h: item.highPrice,
        l: item.lowPrice,
        b: b.toUpperCase(),
        q: q.toUpperCase(),
        // This field doesn't follow binance response.
        a: item.weightedAvgPrice,
        quoteVolume: item.quoteVolume,
      }
    })
  })
}

function marketGraph({ symbol }) {
  return get('/trading-views/history', {
    symbol,
    resolution: '1D',
    from: moment().subtract(6, 'months').unix(),
    to: moment().unix(),
  })
}

const marketsApi = { fetchProducts, marketGraph }

export default marketsApi
