import Layout from '@/layout/home'

export const staticRoutes = [

  {
    path: '/',
    component: Layout,
    name: 'Dashboard',
    redirect: '/overview',
    meta: { title: 'Dash', icon: 'dashboard' },
    children: [
      {
        path: '/overview',
        component: () => import('@/views/dashboards/overview'),
        name: 'Overview',
        meta: { title: 'Dashboard' }
      }
    ]
  },
  {
    path: '/badge',
    component: Layout,
    name: 'Dashboard',
    redirect: '/badges',
    meta: { title: 'Dash', icon: 'el-icon-s-home' },
    children: [
      {
        path: '/badges',
        component: () => import('@/views/dashboards/badges'),
        name: 'Badges',
        meta: { title: 'Badges_title' }
      },
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]
