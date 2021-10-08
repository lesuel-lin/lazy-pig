import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)

const options = {
  routes: routers,
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/' : '/'
}
const router = new Router(options)

router.beforeEach((to, from, next) => {
  console.log(to.name)
  next()
})

router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router