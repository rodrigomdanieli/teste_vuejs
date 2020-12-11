import store from '@/store'
import cookie from 'js-cookie'

const TokenKey = 'admin_backoffice'

export function getToken() {
  if(store)
    return store.getters.token
  if(cookie.get(TokenKey))
    return cookie.get(TokenKey)
  return false
}

export function removeToken(){
  cookie.remove(TokenKey)
}

