import home from '@/views/home/index.vue'
export default [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
]