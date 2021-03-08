import { get, post, remove, put } from './api-creator'

function login(data) {
  return post('sessions/', {
    provider: 'email',
    auth_provider_token: '',
    challenge_type: 'captcha',
    ...data,
  })
}

function register(data) {
  return post('/users/', {
    email: data.email,
    password: data.password,
    password_confirmation: data.confirmPassword,
    provider: 'email',
    register_referral_code: data.referral,
  })
}

function verifyEmail(data) {
  return post('/users/auth/confirm_email', data)
}

function logout() {
  return remove('/users/sign_out')
}

function emailConfirmation(data) {
  return post('/users/auth/resend_email_confirmation', data)
}

function twoFactorAuth({ sessionId, passcode }) {
  return post(`/sessions/${sessionId}/enable`, { '2fa_passcode': passcode })
}

function enableTfa(data) {
  return post(`/users/${data.id}/enable_2fa`, data)
}

function disableTfa(data) {
  return post('/users/disable_2fa', data)
}

function getNewTfaSecret() {
  return get('/users/2fa')
}

function fetchUser(id) {
  return get(`/users/${id}`)
}

function changePassword(data) {
  return put(`/users/${data.userId}`, data)
}

function uploadIdentityImage(image) {
  return post('/public-upload/identity', image, {
    'content-type': 'multipart/form-data',
  })
}

function disableAccount() {
  return post('/users/disable')
}

function resetTfa(data) {
  return post('/2fa-reset-requests/', data)
}

function antiPhishingCode(data) {
  return post('/users/anti-phishing', data)
}

const userApi = {
  login,
  logout,
  emailConfirmation,
  twoFactorAuth,
  fetchUser,
  changePassword,
  register,
  verifyEmail,
  enableTfa,
  disableTfa,
  resetTfa,
  uploadIdentityImage,
  disableAccount,
  antiPhishingCode,
  getNewTfaSecret,
}

export default userApi
