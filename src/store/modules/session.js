import Vue from 'vue'
import * as constants from '@/store/constants'

const emptyUser = () => {
  return {
    id: null
  }
}

const state = {
  user: {...emptyUser()}
}

const actions = {
  [constants.SESSION_SIGN_IN]: ({commit}, user) => {
    console.log('iniciando sesion',user)
    commit(constants.SESSION_SET_PROPERTY, {user})
  }
}

const mutations = {
  [constants.SESSION_SET_PROPERTY]: (state, data) => {
    const [k, v] = Object.entries(data)[0]
    state[k] = v
  }
}

const getters = {
  [constants.SESSION_IS_LOGGED]: state => {
    return JSON.stringify(state.user) !== JSON.stringify({...emptyUser()})
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
