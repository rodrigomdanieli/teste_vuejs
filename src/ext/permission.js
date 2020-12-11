import router from '../router'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  router.previusRoute = from.path
  NProgress.start()
  document.title = getPageTitle(to.meta.title)

  NProgress.done()

  try {
    next()
  } catch (error) {
    Message.error(error || 'Has Error')
    NProgress.done()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
