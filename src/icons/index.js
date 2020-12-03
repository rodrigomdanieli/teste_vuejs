import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component
import IconifyIcon from '@iconify/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilter,faCheck, faGlobe,faServer, faChartLine, faChevronCircleLeft, faChevronCircleRight, faCircle, faWindowMinimize, faCogs, faBell, faVolumeMute, faVolumeUp, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
// register globally



library.add(faFilter)
library.add(faSignOutAlt)
library.add(faCheck)
library.add(faGlobe)
library.add(faChartLine)
library.add(faChevronCircleRight)
library.add(faChevronCircleLeft)
library.add(faCircle)
library.add(faWindowMinimize)
library.add(faCogs)
library.add(faServer)
library.add(faBell)
library.add(faVolumeUp)
library.add(faVolumeMute)





Vue.component('iconify-icon', IconifyIcon);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('faw', FontAwesomeIcon)
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
