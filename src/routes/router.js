import Vue from 'vue'
import Router from 'vue-router'
import TheBody from '@/components/TheBody'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TheBody,
    },
  ],
})

export default router
