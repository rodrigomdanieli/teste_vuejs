import Cookies from 'js-cookie'
import { getLang, getAvailableLangs } from '@/api/langs'

const state = {
    loaded: false,

    availableLangs: [],

    langList: {},

    lang: 'en'

}

const mutations = {
    SET_LANG: (state, { lang, list }) => {
        state.langList[lang] = list
    },

}

const actions = {
    load_langs({commit}) {
        if (!state.loaded) {
            getAvailableLangs().then(async success => {
                if (success.status == "ok") {
                    if (Array.isArray(success.data)) {
                        success.data.forEach( el => {
                            getLang({ lang: el }).then(success2 => {
                                commit('SET_LANG', { lang: el, list: success2 })
                            })
                        });
                    }
                }
            })
        }
    },

    set_availableLangs({state}, langs) {
        state.availableLangs = langs

    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
