import Vue from 'vue'
import Router from 'vue-router'
import { staticRoutes } from './available'

Vue.use(Router)

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: staticRoutes
})

const router = createRouter()

function configureRoute(route) {

  if (Array.isArray(route.children)) {
    route.children = route.children.map((el) => {
      return configureRoute(el)
    })
  }

  if (route.hidden == " ") {
    route.hidden = false
  }
  route.component = getImport(route.component)
  return route;
}

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
