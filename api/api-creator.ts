import axios, { AxiosInstance } from 'axios'
import { STORYBLOK_BASE_URL, STORYBLOK_TOKEN } from 'constants/env'
import { methodParams, requestParams } from '../interfaces/api'
// import { configSelectors } from '../store/config'

class ApiClient {
  private _client: AxiosInstance

  private _isCacheValidate: Boolean

  constructor() {
    this._isCacheValidate = false
    this._client = axios.create({
      baseURL: STORYBLOK_BASE_URL,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
    })

    this.getCV().then((cv: number) => this.setupClient(cv))
  }

  async getCV(): Promise<number> {
    const cv = await this._client.get('spaces/me', {
      params: { token: STORYBLOK_TOKEN },
    })
    return cv.data.space.version
  }

  setupClient(cv: number) {
    this._client.interceptors.request.use((config) => {
      // const lang = configSelectors.language(store.getState())
      return {
        ...config,
        params: {
          ...config.params,
          token: STORYBLOK_TOKEN,
          cv,
          // starts_with: `${lang}/*`,
        },
      }
    })

    this._isCacheValidate = true
  }

  async client(options: requestParams) {
    if (!this._isCacheValidate) {
      const cv = await this.getCV()
      this.setupClient(cv)
    }
    return this._client.request(options)
  }
}

const apiClient = new ApiClient()

async function request({
  method = 'get',
  url,
  params,
  data,
  headers,
  cancelToken,
}: requestParams) {
  const response = await apiClient.client({
    method,
    url,
    params,
    data,
    headers,
    cancelToken,
  })
  return response.data
}

export function get({ url, params, cancelToken }: methodParams) {
  return request({
    method: 'get',
    url,
    params,
    cancelToken,
  })
}

export function post({ url, data, headers, cancelToken }: methodParams) {
  return request({
    method: 'post',
    url,
    data,
    headers,
    cancelToken,
  })
}

export function put({ url, data, cancelToken }: methodParams) {
  return request({
    method: 'put',
    url,
    data,
    cancelToken,
  })
}

export function patch({ url, data, cancelToken }: methodParams) {
  return request({
    method: 'patch',
    url,
    data,
    cancelToken,
  })
}

export function remove({ url, data, cancelToken }: methodParams) {
  return request({
    method: 'delete',
    url,
    data,
    cancelToken,
  })
}
