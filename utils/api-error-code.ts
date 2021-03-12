import { AxiosError } from 'axios'

export function isInvalidToken(errorObj: AxiosError) {
  return errorObj.code === 'invalid_auth_token'
}
