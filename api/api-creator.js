import axios from 'axios'
import { BASE_URL } from 'constants/env'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
})

async function request({
  method = 'get',
  url,
  params,
  data,
  headers,
  cancelToken,
}) {
  const response = await api.request({
    method,
    url,
    params,
    data,
    headers,
    cancelToken,
  })
  return response.data
}

export function get(url, params, cancelToken, responseType) {
  return request({
    method: 'get',
    url,
    params,
    cancelToken,
    responseType,
  })
}

export function post(url, data, headers, cancelToken) {
  return request({
    method: 'post',
    url,
    data,
    headers,
    cancelToken,
  })
}

export function put(url, data, cancelToken) {
  return request({
    method: 'put',
    url,
    data,
    cancelToken,
  })
}

export function patch(url, data, cancelToken) {
  return request({
    method: 'patch',
    url,
    data,
    cancelToken,
  })
}

export function remove(url, data, cancelToken) {
  return request({
    method: 'delete',
    url,
    data,
    cancelToken,
  })
}
