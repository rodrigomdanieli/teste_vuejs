import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import { getLang, getAvailableLangs } from '@/api/langs'
import store from '../store'


Vue.use(VueI18n)
let messages = {}
let loaded = false;

export async  function  loadLangs() {
  if (!loaded) {
    loaded = true;
    await getAvailableLangs().then(async success => {
      if (success.status == "ok") {
        if (Array.isArray(success.data)) {
          store.dispatch('langs/set_availableLangs', success.data);
          success.data.forEach(el => {
            getLang({ lang: el }).then(success2 => {
              i18n.setLocaleMessage(el, success2);
            })
          });
        }
      }
    })
  }
}

export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages: messages
})
export default i18n;
