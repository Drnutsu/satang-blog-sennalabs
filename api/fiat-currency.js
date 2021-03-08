import { get } from './api-creator'

function getFiatCurrency() {
  return get('/fiat-currency/')
}

const fiatCurrencyApi = { getFiatCurrency }

export default fiatCurrencyApi
