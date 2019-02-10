export default [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('@/views/home') }
    ]
  },
  {
    path: '/payment',
    component: () => import('@/layouts/Default.vue'),
    children: [
      { path: '', name: 'Payment', component: () => import('@/views/payment') }
    ]
  },
  {
    path: '/login',
    component: () => import('@/layouts/Default.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('@/views/login') }
    ]
  },
]
