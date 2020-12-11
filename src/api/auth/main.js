import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/force_login',
    method: 'post',
    params: data
  })
}
export function forceLogin(data) {
  return request({
    url: '/auth/force_login',
    method: 'post',
    params: data
  })
}

export function info() {
  return request({
    url: '/auth/check',
    method: 'GET'
  })
}

export function logout(data) {
  return request({
    url: '/auth/logout',
    method: 'get'
  })
}

export function checkEmail(params) {
  return request({
    url: '/auth/valid_email_domain',
    method: 'POST',
    params
  })
}

export function registerTempCustomer(params) {
  return request({
    url: '/auth/temp_register',
    method: 'POST',
    params
  })
}

export function validTempCustomer(params) {
  return request({
    url: '/auth/valid_temp_register',
    method: 'POST',
    params
  })
}

export function registerSubscriptionCustomer(params) {
  return request({
    url: '/auth/register_subscription',
    method: 'POST',
    params
  })
}

export function reupperRegister(params) {
  return request({
    url: '/auth/reupper_register',
    method: 'post',
    params
  })
}

export function resendEmailRegister(params) {
  return request({
    url: '/auth/resend_validation_code',
    method: 'post',
    params
  })
}

export function validAccessHash(params) {
  return request({
    url: '/auth/valid_access_hash',
    method: 'post',
    params
  })
}


