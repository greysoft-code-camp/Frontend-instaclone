
const routes = [
  { path: '/login', component: () => import('src/components/Login.vue') },
  { path: '/signup', component: () => import('src/components/Signup.vue') },
  {

    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index.vue') },
      { path: '/page', component: () => import('src/pages/PageCamera.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
