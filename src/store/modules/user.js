import { login, forceLogin, logout, info } from '@/api/auth/main'
import { getToken, removeToken } from '@/utils/auth'
import Cookie from 'js-cookie'

const getDefaultState = () => {
  return {
    token: getToken(),
    user_name: "",
    abbr_name: "",
    user_id: "",
    timezone: "UTC",
    preferences: undefined
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    Cookie.set('dbsnoop_token',token)
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.user_name = name
  },
  SET_ABBR: (state, abbr)=>{
    state.abbr_name = abbr
  },
  SET_USER_ID: (state, id)=>{
    state.user_id = id
  },
  SET_TIME_ZONE: (state, tz)=>{
    state.timezone = tz
  },

}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(success => {
        if(success.status == "ok" && success.data.token){
          commit('SET_TOKEN', success.data.token)
          resolve()
        }else{
          reject(success.data)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  forceLogin({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      forceLogin({ username: username.trim(), password: password }).then(success => {
        if(success.status == "ok" && success.data.token){
          commit('SET_TOKEN', success.data.token)
          resolve()
        }else{
          reject(success.data)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise(async (resolve, reject) => {
      info().then(response => {
        let data = response.data;

        if (!data) {
          state.token = "";
          removeToken()
          commit('RESET_STATE')
          return reject('Verification failed, please Login again.')
        }

        commit('SET_NAME', data.user_name)
        commit('SET_ABBR', data.abbr)
        commit('SET_USER_ID', data.user_id)
        commit('SET_TIME_ZONE', data.timezone_code)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        state.token = "";
        removeToken() // must remove  token  first
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

