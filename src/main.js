import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import moment from 'moment'
import LoadScript from 'vue-plugin-load-script'
import Clipboard from 'v-clipboard'


import App from './App'
import store from './store'
import router from './router'

import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/ext/permission'
import 'moment/locale/pt-br'
import 'moment/locale/es'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Clipboard)
Vue.use(ElementUI, { locale })
Vue.use(LoadScript)

Vue.prototype.moment = moment

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
