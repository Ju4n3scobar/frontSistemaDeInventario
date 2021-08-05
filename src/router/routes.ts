import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/prueba',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/prueba.vue') }]
  },
  {
    path: '/logsDetails',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LogsDetails.vue') }]
  },
  {
    path: '/inventory',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/inventory.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
