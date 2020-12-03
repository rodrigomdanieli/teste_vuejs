import router from '../router'
import store from '../store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import i18n, { getLanguage, loadLangs } from './i18n'
import moment from 'moment-timezone'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  router.previusRoute = from.path
  if (router.previusRoute.includes('/loading')) {
    router.previusRoute = '/'
  }
  NProgress.start()
  // LANGS CONTROL
  loadLangs()
  i18n.locale = getLanguage()
  moment.locale(getLanguage() == 'en' ? 'en-ez' : getLanguage())
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      await store.dispatch('user/getInfo')

      if (to.meta.validation) {
        const valid = await to.meta.validation.method(to.params)
        if (!valid) {
          let redirect = to.meta.validation.redirect
          if (!redirect) redirect = '/'
          next({ path: redirect })
          NProgress.done()
        }
      }
      try {
        moment.tz.setDefault(store.getters.timezone)

        next()
      } catch (error) {
        // remove token and go to login page to re-login
        await store.dispatch('user/resetToken')
        Message.error(error || 'Has Error')
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      if (to.query) {
        next(
          `/login?redirect=${to.path}&sub=${encodeURI(
            JSON.stringify(to.query)
          )}`
        )
      } else next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
