import Layout from '@/layout/home'

export const staticRoutes = [

  {
    path: '/login',
    component: () => import('@/views/auth/login/index'),
    hidden: true
  },
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
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]
